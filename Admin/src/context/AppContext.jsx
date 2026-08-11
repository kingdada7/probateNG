import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  // Restore admin token from localStorage
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("adminToken");

    if (savedToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
    }

    return savedToken;
  });

  const [admin, setAdmin] = useState(null);

  // Set Authorization header whenever token changes
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      localStorage.setItem("adminToken", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("adminToken");
    }
  }, [token]);

  // Fetch logged-in HOD
  const fetchAdmin = async () => {
    try {
      const { data } = await axios.get("/api/admin/gethod");

      if (data.success) {
        setAdmin(data.admin);
      }
    } catch (error) {
      console.error("Error fetching admin:", error);

      setAdmin(null);
      setToken(null);
    }
  };

  // Fetch admin whenever token exists
  useEffect(() => {
    if (token) {
      fetchAdmin();
    }
  }, [token]);

  const logout = () => {
    setToken(null);
    setAdmin(null);
    navigate("/");
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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
