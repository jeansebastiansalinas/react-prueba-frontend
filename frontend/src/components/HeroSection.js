import { useState, useEffect } from "react";

const HeroSection = () => {
  const [banner, setBanner] = useState(null); // Estado para el banner
  const [categories, setCategories] = useState([]); // Estado para las categorías

  useEffect(() => {
    // 1️⃣ Obtener banner
    fetch("https://api.test.interactiva.net.co/api/get-banners/")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setBanner(data[0]); // Guardamos el primer banner
        }
      })
      .catch((error) => console.error("Error al obtener el banner:", error));

    // 2️⃣ Obtener categorías
    fetch("https://api.test.interactiva.net.co/api/get-categories/")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error al obtener categorías:", error));
  }, []);

  return (
    <div>
      <h2>Hero Section</h2>
    </div>
  );
};

export default HeroSection;
