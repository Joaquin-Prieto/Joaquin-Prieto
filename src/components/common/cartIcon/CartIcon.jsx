import { IoCartOutline } from "react-icons/io5";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

export const CartIcon = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} color="primary">
        <IoCartOutline size={"2rem"} color="black" />
      </Badge>
    </Link>
  );
};
