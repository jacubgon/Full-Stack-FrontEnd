import React from "react";
import Form from "../components/commons/Form";
import authService from '../services/authService'
import {useAuth} from "../context/auth";
import { useNavigate } from "react-router-dom";
function RegisterCandidates() {

  const [user, dispatch] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    authService.signup(data)
   .then(response => {
    dispatch({ type: "LOGIN", payload: response });
    navigate("/");
   })
  }

  return (
    <div style={{border: '1px solid blueviolet', padding: '10px'}}>
      <Form
      
      header={"Regístrate"}
        inputs={[
          { name: "nombre", label: "Nombre del Usuario" },
          { name: "password", label: "Password", type: "password" },
          { name: "email", label: "Email" },
          {name: "habilidades", label:"Habilidades"},
          {name: "ubicacion", label:"Ubicación"},
        ]}
        submitLabel="Registrar"
        onSubmit={handleSubmit}
        
      />
    </div>
  );
}

export default RegisterCandidates;
