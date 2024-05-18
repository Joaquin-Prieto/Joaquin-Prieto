import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import "./Checkout.css";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { useFormik } from "formik";
import * as Yup from "yup";
import {auth, provider} from "../../../firebaseConfig"
import { signInWithPopup } from "firebase/auth";
import { Password } from "@mui/icons-material";

export const Checkout = () => {
  const {cart, getTotalPrice} = useContext(CartContext)
  const [orderId, setOrderId] = useState(null)

  let total = getTotalPrice()

  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;


    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      buyer: info,
      items: cart,
      total: total,
    };
    let ordersCollection = collection(db, "orders");
    addDoc( ordersCollection , obj)
      .then((res) => setOrderId(res.id))
      .catch((error) => console.log(error));

    cart.forEach((product)=>{
      let refDoc = doc(db, "products", product.id)
      updateDoc(refDoc, {stock: product.stock - product.quantity})
    })
    clearCart();

  };

  // const {errors } = useFormik({
  //   initialValues: { name: "", email: "", password: "" , confirmPassword:"",},
  //   onSubmit: (x) => {
  //     console.log(x);
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().required("Este campo es obligatorio").min(3, "Al menos 3 caracteres obligatorios"),
  //     email: Yup.string().email("El mail no es valido").required("Este campo es obligatorio"),
  //     password: Yup.string().required("Este campo es obligatorio").matches(
  //       /^(?=.*\d)(?=.*[@$!%*?&])(?=.*[a-z])(?=.*[A-Z])/,
  //       "La contraseña debe tener al menos: \n - 8 caracteres \n - Una mayúscula \n - Una minúscula \n - Un número \n - Un caracter especial"
  //     ),
  //     confirmPassword: Yup.string().required("Este campo es obligatorio").oneOf([Yup.ref("password")], "las contraseñas no coinciden")
  //   }),
  //   validateOnChange: false,
  // });
  // console.log(errors)
  return (
    <div className="formDiv">
    
       { orderId ?  (
        <div className="idDiv">
          <h1>Su pago ha sido realizado con exito</h1>
       <h1 className="idH1">su id de compra es: {orderId}</h1>
       <button href="/">Volver a inicio</button></div>
      
      ) : 
       

      (
        
      <form onSubmit={handleSubmit}>
        <div className="formH1"><h1>Para finalizar su compra por favor complete estos datos:</h1></div>
      <TextField
      variant="outlined"
        type="text"
        label="nombre"
        onChange={handleChange}
        name="name"

      />
      
<div className="textFieldCheckout">
<TextField
variant="outlined"
        type="text"
        label="email"
        onChange={handleChange}
        name="email"
       

      />
</div>
      

        <div className="textFieldCheckout">
        <TextField
        variant="outlined"
        type="text"
        label="telefono"
        onChange={handleChange}
        name="phone"
      />
        </div>
        
        <div className="textFieldCheckout">
        <TextField
        variant="outlined"
        type="text"
        label="Direccion"
        onChange={handleChange}
        name="adress"
      />
        </div>


      <div className="checkoutButton">
      <Button variant="contained" onClick={handleSubmit} >
        enviar
      </Button>
      </div>
     
    </form>)
       }
     
    </div>
  );
};
