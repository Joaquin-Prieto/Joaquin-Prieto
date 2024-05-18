import { Grid } from "@mui/material";
import ItemCards from "../../common/productCard/ItemCards";

const ItemList = ({ items, error }) => {
  console.log(items);

  return (
    <div className="container">
      {items.map(({ id, title, description, price, img }) => {
        return (
            <ItemCards
              key={id}
              img={img}
              title={title}
              description={description}
              price={price}
              id={id}
            />
          
        );
      })}
      {
      error && <h2>{error.message}</h2>
}
    </div>
  );
};

export default ItemList;
