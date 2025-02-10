import React, { useState, useEffect } from "react";
import axios from "axios";

const TravelExperiences = () => {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const response = await axios.get(
          "https://api.test.interactiva.net.co/api/get-travels/"
        );
        setTravels(response.data); // Guardamos toda la lista de experiencias
      } catch (error) {
        console.error("Error al obtener las experiencias de viaje:", error);
      }
    };

    fetchTravels();
  }, []);

  return (
    <section className="experiences-section">
      <h2 className="experiences-title">E X P E R I E N C I A S</h2>

      <div className="experiences-wrapper">
        {/* Flecha izquierda */}
        <button className="carousel-button prev">‹</button>

        <div className="experiences-gallery">
          {travels.map((travel) => (
            <div key={travel.id} className="experience-card">
              <div
                className="experience-image"
                style={{
                  backgroundImage: `url(https://api.test.interactiva.net.co${travel.image_cover})`,
                }}
              ></div>
              <span
                className="experience-tag"
                style={{ backgroundColor: travel.status.color }}
              >
                {travel.status.title}
              </span>
              <div className="experience-info">
                <h3 className="experience-title">{travel.title}</h3>
                <p className="experience-dates">Fechas y precios no disponibles</p>
                <p className="experience-description">
                  Información adicional no disponible.
                </p>
              </div>
              <a href="#" className="experience-button">
                MÁS INFORMACIÓN
              </a>
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        <button className="carousel-button next">›</button>
      </div>
    </section>
  );
};

export default TravelExperiences;
