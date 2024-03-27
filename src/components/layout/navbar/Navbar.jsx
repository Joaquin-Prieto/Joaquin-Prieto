import { Carticon } from "../../common/Carticon";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <>
    <div className={"padre"}>
      <div>
        <img src="./public/GPLogopng.png" alt="" />
      </div>
      <ul>
        <a href="#"><li>Todo</li></a>
        <a href="#"><li>Placas Graficas</li></a>
        <a href="#" ><li>Procesadores</li></a>
      </ul>
    <Carticon/>
     
    </div>
    </>
  );
};
