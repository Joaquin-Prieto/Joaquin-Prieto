import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { CircularProgress } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";


const ItemListContainer = () => {

  //const navigate = useNavigate()
  const {name} = useParams()
  console.log(name)


  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    let filteredProducts = products.filter( product => product.category === name )

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve( name ? filteredProducts : products);
      } else {
        reject({ status: 400, message: "Algo salio mal" });
      }
    });
    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [name]);

  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;

