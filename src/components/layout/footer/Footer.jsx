import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footerPadre">
      <div className="footer">
        <div className="footer1">
          <a href="#" className="footerA"><li className="footerLi">Servicio al Cliente</li></a>
          <a href="#" className="footerA"><li className="footerLi">Condiciones de uso</li></a>
          <a href="#" className="footerA"><li className="footerLi">Politicas de Garantia</li></a>
          <a href="#" className="footerA"><li className="footerLi">Nosotros</li></a>
        </div>
        <div className="footer2">
          <a href="#" className="footerA"><li className="footerLi">Contactanos</li></a>
          <a href="#" className="footerA"><li className="footerLi">Boton de arrepentimiento</li></a>
          <a href="#" className="footerA"><li className="footerLi">Envios</li></a>
          <a href="#" className="footerA"><li className="footerLi">Politicas de privcidad</li></a>
        </div>
      </div>
      <div className="footerbelow"><p>© GamingPlanet 2024 - Todos los Derechos Reservados</p></div>
    </div>
  );
};
