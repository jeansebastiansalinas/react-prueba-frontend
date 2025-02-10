import { useState, useEffect } from "react";
import { fetchPartners } from "../services/api";

const BASE_URL = "https://api.test.interactiva.net.co"; // Asegúrate de que coincide

const Alliances = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPartners()
      .then((data) => {
        setPartners(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener alianzas:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="alliances-section">
      <h2 className="alliances-title">ALIANZAS ESTRATÉGICAS</h2>

      {loading ? (
        <p>Cargando alianzas...</p>
      ) : (
        <div className="alliances-logos">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="logo"
              style={{
                backgroundImage: `url(${BASE_URL}${partner.logo})`,
              }}
              title={partner.name}
            ></div>
          ))}
        </div>
      )}

      <div className="whatsapp-icon"></div>
    </section>
  );
};

export default Alliances;
