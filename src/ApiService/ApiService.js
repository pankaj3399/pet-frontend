import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/user/register", userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

// Function to login a user
export const loginUser = async (loginData) => {
  try {
    const response = await api.post("/user/login", loginData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post("/contact", formData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

// Function to add a new pet
export const addPet = async (petData) => {
  try {
    const response = await api.post("/admin/pet", petData, {
      headers:{
        Authorization:'Bearer '+localStorage.getItem('token')
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

// Function to update an existing pet
export const updatePet = async (petId, petData) => {
  try {
    const response = await api.put(`/admin/pet/${petId}`, petData, {
      headers:{
        Authorization:'Bearer '+localStorage.getItem('token')
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

// Function to delete a pet
export const deletePet = async (petId) => {
  try {
    const response = await api.delete(`/admin/pet/${petId}`, {
      headers:{
        Authorization:'Bearer '+localStorage.getItem('token')
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

export const getAllPets = async (data) => {
  try {
    const response = await api.post('/pet/all', data, {
      // withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};