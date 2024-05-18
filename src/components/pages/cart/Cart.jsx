import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({ cart, clearCart, deleteById, total }) => {

  const clearCartAlert = ()=>{  
    Swal.fire({
      title:"Seguro quieres vaciar el carrito?",
      position: "center",
      showConfirmButton:true,
      showDenyButton:true,
      confirmButtonText:"Vaciar",
      denyButtonText:"Cancelar",
      
    }).then((res)=>{
        if(res.isConfirmed){
          clearCart();
          Swal.fire({
            title:"Su carrito ha sido vaciado",
            icon:"success",
            timer:1500
          })
        }else if(res.isDenied){
          
        }
    });
  };


  return (
    <div className="cartFlex">

      <div className="cartProducts">   
        {cart.map((product) => (
          <div key={product.id} className="cartCards">
              <img src={product.img} />
              <h4>{product.title}</h4>
              <h5>${product.price}</h5>
              <h6>{product.quantity}</h6>
             <button className="btnEliminar" onClick={ () => deleteById(product.id) }> Eliminar </button>
              </div>
          ))}

        <Button variant="outlined" onClick={clearCartAlert}>Limpiar carrito</Button>
      
      </div>
   
      <div className="cartCheckout">
        <div className="cartCheckoutTitle">
          <h3>Resumen de compra</h3>
        </div>
        <div className="cartCheckoutTxt">
         <h2>Total</h2>
         <h2>${total?.toFixed(2)}</h2>
      </div>
      <div className="cartCheckoutBtn">
         <Link to="/checkout">
            <Button variant="contained">Finalizar Compra</Button>
          </Link>
       </div>
     
      </div>

     
    </div>
  );
};

export default Cart;
