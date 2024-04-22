import { CartIcon } from "../../common/cartIcon/CartIcon";
import "./Navbar.css"
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    <div className={"padre"}>
      <Link to="/"><div>
        <img src="./GPLogopng.png" alt="" />
      </div></Link>
      <ul>
        <Link to="/" className="li">Todo</Link>
        <Link to="/category/placas-graficas" className="li">Placas Graficas</Link>
        <Link to="/category/procesadores" className="li">Procesadores</Link>
      </ul>
    
     <CartIcon/> 
     
    </div>
    </>
  );
};
