import { useContext } from "react"
import Cart from "./Cart"
import "./CartContainer.css"
import { CartContext } from "../../../context/CartContext"
import Swal from "sweetalert2"
import { TbRulerMeasure } from "react-icons/tb"


const CartContainer = () => {

   const {cart, clearCart, deleteById, getTotalPrice} = useContext(CartContext)
  
      let total = getTotalPrice()

     

  return (
    <div className="cartContainer">
      <Cart cart={cart} clearCart={clearCart} deleteById={deleteById} total={total} />
    </div>
  )
}

export default CartContainer