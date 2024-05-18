import { IoCartOutline } from "react-icons/io5";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartIcon = () => {

  const  {getTotalItems} = useContext( CartContext )
  let total = getTotalItems()
  

  return (
    <Link to="/cart">
      <Badge badgeContent={total} color="primary">
        <IoCartOutline size={"2rem"} color="black" />
      </Badge>
    </Link>
  );
};
