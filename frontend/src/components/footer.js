import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo y Redes Sociales */}
        <div className="footer-left">
          <div className="footer-logo"></div>
          <div className="footer-socials"></div>
        </div>

        <div className="footer-right">
          <div className="footer-navigation">
            <ul>
              <li>Inicio</li>
              <li>¿Quienes somos?</li>
              <li>Viajes grupales</li>
              <li>Viajes a la medida</li>
              <li>Contáctanos</li>
              <li>Alianzas estratégicas</li>
              <li>Blogs</li>
              <li>Términos y condiciones</li>
              <li>Política de privacidad</li>
              <li>Registro Nacional de Turismo</li>
            </ul>
          </div>

          <div className="footer-contact">
            <p><span className="icon email"></span> info@allintravels.com</p>
            <p><span className="icon phone"></span> 0057 (604) 444 45 83</p>
            <p>
              <span className="icon location"></span> Carrera 43A # 18 Sur - 135 Of 834,
              <br /> Sao Paulo Plaza Medellín - Colombia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
