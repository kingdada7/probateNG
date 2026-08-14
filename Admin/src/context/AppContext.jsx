import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("adminToken");

    if (savedToken) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${savedToken}`;
    }

    return savedToken;
  });

  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      localStorage.setItem("adminToken", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("adminToken");
    }
  }, [token]);

  const fetchAdmin = async () => {
    try {
      const { data } = await axios.get("/api/admin/me");

      if (data.success) {
        setAdmin(data.admin);
      }
    } catch (error) {
      console.error("Error fetching admin:", error);

      setAdmin(null);
      setToken(null);
    }
  };

  useEffect(() => {
    if (token) {
      fetchAdmin();
    }
  }, [token]);

  const logout = () => {
    setToken(null);
    setAdmin(null);
    navigate("/admin");
  };

  const value = {
    axios,
    navigate,
    token,
    setToken,
    admin,
    setAdmin,
    fetchAdmin,
    logout,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};