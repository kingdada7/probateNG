import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("adminToken");

    if (savedToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
    }

    return savedToken;
  });

  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      localStorage.setItem("adminToken", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("adminToken");
    }
  }, [token]);
  const fetchAdmin = async () => {
    try {
      const { data } = await axios.get("/api/hodadmin/me");

      if (data.success) {
        setAdmin(data.admin);
      }
    } catch (error) {
      console.error(
        "Error fetching admin:",
        error.response?.data || error.message,
      );

      setAdmin(null);

      if (error.response?.status === 401) {
        setToken(null);
      }
    }
  };
  useEffect(() => {
    if (token) {
      fetchAdmin();
    }
  }, [token]);

  const fetchPendingStaff = async () => {
    try {
      const { data } = await axios.get("/api/hodadmin/staff/pending");

      return data;
    } catch (error) {
      console.error(
        "Error fetching pending staff:",
        error.response?.data || error.message,
      );

      throw error;
    }
  };

  const updateStaffStatus = async (staffId, status) => {
    try {
      const { data } = await axios.patch(
        `/api/hodadmin/staff/${staffId}/status`,
        { status },
      );

      return data;
    } catch (error) {
      console.error(
        "Error updating staff status:",
        error.response?.data || error.message,
      );

      throw error;
    }
  };

  const fetchAllStaff = async () => {
    try {
      const { data } = await axios.get("/api/hodadmin/staff");
      return data;
    } catch (error) {
      console.error(
        "Error fetching all staff:",
        error.response?.data || error.message,
      );
      throw error;
    }
  };

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
    fetchPendingStaff,
    updateStaffStatus,
    fetchAllStaff,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
