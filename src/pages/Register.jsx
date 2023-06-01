import React from "react";
import Form from "../components/commons/Form";
import authService from '../services/authService'

function Register() {

  const handleSubmit = (data) => {
    authService.signup(data)
   .then(response => {
     console.log("Usuario registrado exitosamente");
     console.log(response);
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

export default Register;
