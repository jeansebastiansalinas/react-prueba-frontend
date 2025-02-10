import React, { useState, useEffect } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://api.test.interactiva.net.co/api/get-blogs/");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error al obtener los blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="blogs-section">
      <h2 className="blogs-title">BLOGS</h2>

      <div className="blogs-content">
        {/* Primera tarjeta sola */}
        {blogs.length > 0 && (
          <div className="blog-card blog-card-1">
            <div
              className="blog-image"
              style={{ backgroundImage: `url(https://api.test.interactiva.net.co${blogs[0].image_cover})` }}
            ></div>
            <div className="blog-info">
              <h3 className="blog-title">{blogs[0].title}</h3>
              <p className="blog-description">
                {blogs[0].description ? blogs[0].description.substring(0, 100) + "..." : ""}
              </p>
              <a href={blogs[0].url_front} className="blog-link">
                LEER MÁS
              </a>
            </div>
          </div>
        )}

        {/* Contenedor de las dos tarjetas apiladas */}
        <div className="blog-stack">
          {blogs.slice(1, 3).map((blog, index) => (
            <div key={blog.id} className={`blog-card blog-card-${index + 2}`}>
              <div
                className="blog-image"
                style={{ backgroundImage: `url(https://api.test.interactiva.net.co${blog.image_cover})` }}
              ></div>
              <div className="blog-info">
                <h3 className="blog-title">{blog.title}</h3>
                <a href={blog.url_front} className="blog-link">
                  LEER MÁS
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
