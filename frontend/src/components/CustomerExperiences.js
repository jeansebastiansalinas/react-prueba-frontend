import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerExperiences = () => {
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get(
          "https://api.test.interactiva.net.co/api/get-customer_experiences/"
        );
        setExperience(response.data[0]); // Tomamos solo la primera experiencia.
      } catch (error) {
        console.error("Error al obtener la experiencia del cliente:", error);
      }
    };

    fetchExperience();
  }, []);

  if (!experience) {
    return <p>Cargando...</p>;
  }

  return (
    <section className="different-section">
      <h2 className="different-title">{experience.title}</h2>

      <div className="different-content">
        <div
          className="different-image"
          style={{
            backgroundImage: `url(https://api.test.interactiva.net.co${experience.image})`,
          }}
        ></div>

        <div className="different-info">
          <h3 className="different-subtitle">{experience.description}</h3>
          <p className="different-description">{experience.diference_description}</p>
          <a href="#" className="different-button">
            COTIZAR MI VIAJE
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerExperiences;
