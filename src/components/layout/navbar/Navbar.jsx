import { CartIcon } from "../../common/cartIcon/CartIcon";

import "./Navbar.css"
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    
    <div className={"padre"}>
      <Link to="/"><div className="navImg">
        <img src= 'https://res.cloudinary.com/deo4pafo4/image/upload/v1715374674/y4gughkyzcum3unrj07d.png'  />
      </div></Link>
     
     <div className="navSections">
          <div className="navSection"><Link to="/" className="li">Ver todo</Link></div>
          <div className="navSection"><Link to="/category/placas-graficas" className="li">Placas Graficas</Link></div>
          <div className="navSection"><Link to="/category/procesadores" className="li">Procesadores</Link></div>
        </div>
      


      <CartIcon/> 

     
     
     
    </div>
  );
};
