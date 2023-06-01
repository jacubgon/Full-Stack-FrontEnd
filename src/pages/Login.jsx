import React from "react";
import Form from "../components/commons/Form";
import authService from "../services/authService";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

function Login() {

  const [user, dispatch] = useAuth();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    authService.login(data).then((decodedToken) => {
      dispatch({ type: "LOGIN", payload: decodedToken });
      navigate("/");
    });
   
  };
user

  return (
    
    <div style={{ border: "1px solid blueviolet", padding: "10px" }}>
      <Form
        header={"Iniciar Sesión"}
        inputs={[
          { name: "email", label: "Email" },
          { name: "password", label: "Password", type: "password" },
        ]}
        submitLabel="Iniciar"
        onSubmit={handleLogin}
      />
    </div>
  );
}

export default Login;
