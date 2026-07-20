import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

//sets a default base URL for every Axios request.
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);

  const value = {
    axios,
    navigate,
    token,
    setToken,
    input,
    setInput,
    user,
    setUser
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
