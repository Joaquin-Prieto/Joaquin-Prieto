import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footerPadre">
      <div className="footer">
        <div className="footer1">
          <li className="footerLi">Servicio al Cliente</li>
          <li className="footerLi">Condiciones de uso</li>
          <li className="footerLi">Politicas de Garantia</li>
          <li className="footerLi">Nosotros</li>
        </div>
        <div className="footer2">
          <li className="footerLi">Contactanos</li>
          <li className="footerLi">Boton de arrepentimiento</li>
          <li className="footerLi">Envios</li>
          <li className="footerLi">Politicas de privcidad</li>
        </div>
      </div>
      <div className="footerbelow"><p>© GamingPlanet 2024 - Todos los Derechos Reservados</p></div>
    </div>
  );
};
