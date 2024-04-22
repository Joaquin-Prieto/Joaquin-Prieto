import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ItemCards.css";
import { Link } from "react-router-dom";

const ItemCards = ({ id, img ,title, description, price }) => {
  return (
    <div className="divPadre">
      <Card className="cardstyle" sx={{ width: 345, height: 590}}>
        <CardMedia
          sx={{ height: 345 }}
          image={img}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
        <CardActions className="cardbuttons">
         <Link to={`/itemDetail/${id}`}> 
          <Button size="small">Buy</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
export default ItemCards;
