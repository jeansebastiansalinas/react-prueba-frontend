import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./components/footer"; 
import Alliances from "./components/alliances";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";
import CustomerExperiences from "./components/CustomerExperiences";
import TravelExperiences from "./components/TravelExperiences"; 





function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/saludo");
        setMensaje(response.data.mensaje);
      } catch (error) {
        console.error("Error al obtener datos", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo-container"></div> {/* Logo se carga desde CSS */}
        <nav className="nav">
          <a href="#" className="nav-link">Inicio</a>
          <a href="#" className="nav-link">Nosotros</a>
          <a href="#" className="nav-link">Viajes</a>
          <a href="#" className="nav-link">Blogs</a>
          <a href="#" className="nav-link">Contacto</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">THE TRAVEL</h1>
        <h2 className="hero-subtitle">EXPERIENCE</h2>

        {/* Contenedor de tarjetas */}
        <div className="card-container">
          <div className="card card-1">
            <div className="card-overlay">
              <p className="card-text">Viajes grupales</p>
            </div>
          </div>

          <div className="card card-2">
            <div className="card-overlay">
              <p className="card-text">Viajes a la medida</p>
            </div>
          </div>

          <div className="card card-3">
            <div className="card-overlay">
              <p className="card-text">Destinos para parejas</p>
            </div>
          </div>
        </div>
      </div>

      <AboutUs />


      <TravelExperiences />



<CustomerExperiences/>


<Blogs />


<section className="form-section">
      <h2 className="form-title">DISEÑA TU VIAJE</h2>
      <p className="form-subtitle">AQUÍ COMIENZA TU EXPERIENCIA</p>
      <p className="form-description">
      Una vez llenado este formulario, uno de nuestros planners travelers se pondra en 
contacto contigo para perfeccionar ese viaje que tanto has soñado. Estamos aquí para 
brindarte la mejor experiencia.      </p>
      <form className="form-container">
        {/* Destinos */}
        <div className="form-row">
          <div className="form-group">
            <label>¿CUÁL ES EL DESTINO QUE QUIERES VISITAR?</label>
            <select>
              <option>Selecciona un destino</option>
            </select>
          </div>
          <div className="form-group">
            <label>¿QUÉ OTRO DESTINO TIENES EN MENTE?</label>
            <select>
              <option>Selecciona otro destino</option>
            </select>
          </div>
        </div>

        {/* Experiencias */}
        <div className="form-group">
          <label>¿QUÉ EXPERIENCIAS QUIERES VIVIR?</label>
          <div className="experience-options">
            <button type="button">SAFARI</button>
            <button type="button">DEPORTE</button>
            <button type="button">ARTE Y CULTURA</button>
            <button type="button">DESCANSO</button>
            <button type="button">ESPIRITUAL</button>
            <button type="button">PLAYA</button>
            <button type="button" className="full-width">NATURALEZA</button>
          </div>
        </div>

        {/* Fechas */}
        <div className="form-group">
          <label>¿SABES CUÁNDO VIAJAR?</label>
          <div className="radio-options">
            <input type="radio" id="si" name="viajar" />
            <label htmlFor="si">Sí</label>
            <input type="radio" id="no" name="viajar" />
            <label htmlFor="no">No</label>
            <input type="date" placeholder="Ida" />
            <input type="date" placeholder="Regreso" />
          </div>
        </div>

        {/* Cantidad de personas */}
        <div className="form-row">
          <div className="form-group">
            <label>NIÑOS:</label>
            <select>
              <option>0</option>
            </select>
          </div>
          <div className="form-group">
            <label>ADULTOS:</label>
            <select>
              <option>1</option>
            </select>
          </div>
        </div>

        {/* Viaje Ideal */}
        <div className="form-group">
          <label>TU VIAJE IDEAL...</label>
          <textarea rows="4"></textarea>
        </div>

        {/* Botón de Enviar */}
        <button type="submit" className="form-button">ENVIAR</button>
      </form>
    </section>



    <Alliances />




    <section className="newsletter-section">
      <p className="newsletter-text">
        Suscríbete a nuestro newsletter y recibe noticias, descuentos y más
      </p>
      <div className="newsletter-form">
        <input
          type="email"
          className="newsletter-input"
          placeholder="Correo electrónico"
        />
        <button className="newsletter-button">SUSCRIBIRME</button>
      </div>
    </section>


    {/* Footer */}
    <Footer />


    </div>
  );
}

export default App;
