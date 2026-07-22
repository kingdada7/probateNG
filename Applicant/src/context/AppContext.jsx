import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  // Restore token from localStorage
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });

  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);

  // Set Authorization header whenever token changes
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  // Fetch logged-in user
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/citizen/get-user");

      if (data.success) {
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);

      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
    }
  };

  // Fetch user whenever a token exists
  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [token]);

  const value = {
    axios,
    navigate,
    token,
    setToken,
    input,
    setInput,
    user,
    setUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
