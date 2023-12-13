import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  let [inputFields, setInputFields] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    if (inputFields.userName === "test" && inputFields.password === "test") {
      setAuth(true);
      navigate("/");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setInputFields, submitHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
