import { useState } from "react";
import CounterPresentacional from "./CounterPresentacional";
import "./CounterContainer.css"

export const CounterContainer = ( { stock, initial=1, onAdd } ) => {
    const [contador, setContador] = useState(initial);

    const sumar = () => {
    if(contador < stock){
        setContador(contador + 1)
    }
};

const restar = () => {
    if (contador > 1){
        setContador(contador - 1)
    }
};

let objectProps = {
    restar, 
    sumar,
    contador,
    stock,
    onAdd
}
  
    return (
        <CounterPresentacional {...objectProps}/>
  )
}
