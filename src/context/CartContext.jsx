import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ( {children} ) => {

  const [cart, setCart] = useState([])


  //funcion para agregar un producto al carrito
  const addToCart = ( product )=>{
     let exist = inCart(product.id)

     if(exist){
      
      let newArray = cart.map((elemento)=>{
        if(elemento.id === product.id){
          return {...elemento, quantity: product.quantity}
        }else{
          return elemento
        }
      });
      setCart(newArray);

     }else{
      setCart([...cart, product]);
     }
  }

  //funcion para vaciar carrito
  const clearCart = () => {
    setCart([])
  }


  //funcion para eliminar un producto del carrito
  const deleteById = (id) =>{
    const newArray = cart.filter(product => product.id !== id)
    setCart(newArray)
  }

  //Funcion para verificar si el producto esta en el carrito
  const inCart = (id)=>{
    let x = cart.some( product => product.id === id ) 
    return x

  }

  const getQuantityById = (id) => {
    let product = cart.find( el => el.id === id )
    if(product){
      return product.quantity
    }else{
      return product
    }
  }

  const getTotalPrice = () => {
    let total = cart.reduce( (acc, elemento) => {
      return acc + (elemento.quantity * elemento.price) 
    }, 0 )


    return total
    
  }



  const getTotalItems = ()=>{
    let total = cart.reduce((acc, elemento)=>{
      return acc + elemento.quantity
    }, 0)
    if(total >=10){
      return "+9"
    }else{
      return total
    }
    
  }

  let data = {cart, addToCart, clearCart, deleteById, getQuantityById, getTotalPrice, getTotalItems}

  return <CartContext.Provider value={data}>
    {children}
  </CartContext.Provider>
}
export default CartContextProvider