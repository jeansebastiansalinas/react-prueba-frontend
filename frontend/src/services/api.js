const BASE_URL = "https://api.test.interactiva.net.co/";

// Función para obtener empresas
export const fetchCompanies = async () => {
  const response = await fetch(`${BASE_URL}api/get-companies/`);
  return response.json();
};

// Función para obtener banners (imágenes principales)
export const fetchBanners = async () => {
  const response = await fetch(`${BASE_URL}api/get-banners/`);
  return response.json();
};

// Función para obtener categorías
export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}api/get-categories/`);
  return response.json();
};

// Función para obtener viajes
export const fetchTravels = async () => {
  const response = await fetch(`${BASE_URL}api/get-travels/`);
  return response.json();
};

// Función para obtener experiencias de clientes
export const fetchCustomerExperiences = async () => {
  const response = await fetch(`${BASE_URL}api/get-customer_experiences/`);
  return response.json();
};

// Función para obtener blogs
export const fetchBlogs = async () => {
  const response = await fetch(`${BASE_URL}api/get-blogs/`);
  return response.json();
};

// Función para obtener etiquetas
export const fetchTags = async () => {
  const response = await fetch(`${BASE_URL}api/get-tags/`);
  return response.json();
};

// Función para obtener socios
export const fetchPartners = async () => {
  const response = await fetch(`${BASE_URL}api/get-partners/`);
  return response.json();
};

// Función para enviar suscripción a newsletter
export const setNewsletter = async (email) => {
  const response = await fetch(`${BASE_URL}api/set-newsletter/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return response.json();
};
