import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams, useNavigate } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { Skeleton } from "@mui/material";
import { db } from "../../../firebaseConfig";

import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  //const navigate = useNavigate()
  const { name } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const productsCollection = collection( db, "products" )
    // getDocs(productsCollection).then((res) => {
    // let newArray = res.docs.map( (doc)=>{
    //   return {id: doc.id, ...doc.data()}
    // } );
    // setItems(newArray)
    //   }
    // )

    // const productsCollection = collection( db, "products" );
    // let solicitud = query( productsCollection, where(  "category", "==" , name ) )
    // getDocs(solicitud).then((res) => {
    //   let newArray = res.docs.map( (doc)=>{
    //     return {id: doc.id, ...doc.data()}
    //   } );
    //   setItems(newArray)
    //   });

    const productsCollection = collection( db, "products" );
    let consulta = productsCollection
    if(name){
      consulta = query(productsCollection, where("category", "==", name))
    }

    getDocs(consulta).then((res) => {
        let newArray = res.docs.map( (doc)=>{
          return {id: doc.id, ...doc.data()}
        } );
        setItems(newArray)
        });


    }, [name]);


    // const addDocsProducts = () => {

    //   let productsCollection = collection( db, "products")
    //   products.forEach( (product) => addDoc(productsCollection, product) )

    // }

  if (items.length === 0) {
    return (
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-evenly",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1ren" }}
            height={300}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={60}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={30}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={45}
            width={100}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={60}
            width={70}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1ren" }}
            height={300}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={60}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={30}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={45}
            width={100}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={60}
            width={70}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1ren" }}
            height={300}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={60}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={30}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={45}
            width={100}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={60}
            width={70}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1ren" }}
            height={300}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={60}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={30}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={45}
            width={100}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={60}
            width={70}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1ren" }}
            height={300}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={60}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={30}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={45}
            width={100}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={60}
            width={70}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1ren" }}
            height={300}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={60}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={30}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={45}
            width={100}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1ren" }}
            height={60}
            width={70}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {items.length > 0 ? (
        <ItemList items={items} error={error} />
      ) : (
        <div className="mainLoader">
          <PacmanLoader color="#b700ef" />
        </div>
      )}
      {/* <button onClick={addDocsProducts}>Agregar Documentos</button> */}
    </>
  );
};

export default ItemListContainer;
