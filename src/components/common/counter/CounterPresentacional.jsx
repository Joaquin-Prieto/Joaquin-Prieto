const CounterPresentacional = ({ restar, sumar, contador, stock, onAdd }) => {
  return (
    <div className="counterDiv">
       
      <div className="counterButtDiv">
       <div className="counterStockPadre">

       <div className="counterStock">
        <h4>{`${stock} disponibles!`}</h4>
      </div>

       <div className="counterStockButtons"><button className="counterButton" onClick={restar}>
          -
        </button>
        <h2>{contador}</h2>
        <button className="counterButton" onClick={sumar}>
          +
        </button></div>
       </div>
      
        <div className="detailButtonsDiv">
            <button onClick={()=>onAdd(contador)}  className="itemDetailButtonAdd" >Añadir al carrito</button>
            
          </div>
       
        

        
      </div>
      
    </div>
  );
};

export default CounterPresentacional;
