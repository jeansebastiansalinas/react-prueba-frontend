import { useState, useEffect } from "react";
import { fetchCompanies } from "../services/api";

const BASE_URL = "https://api.test.interactiva.net.co"; // Asegura que coincida

const AboutUs = () => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompanies()
      .then((data) => {
        setCompany(data[0]); // La API devuelve un array, tomamos el primer elemento
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener la empresa:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando información...</p>;
  }

  return (
    <section className="about-section">
      <h2 className="about-title">N O S O T R O S</h2>
      <p className="about-text">{company.description}</p>

      <div className="about-gallery">
        <div className="instagram-logo"></div>

        {company.feed_instagram.map((post) => (
          <div key={post.id} className="about-card" style={{ backgroundImage: `url(${BASE_URL}${post.image})` }}></div>
        ))}

        <div className="about-card about-arrow">
          <div className="about-arrow-icon">➜</div>
        </div>
      </div>

      <div className="separator"></div>
    </section>
  );
};

export default AboutUs;
