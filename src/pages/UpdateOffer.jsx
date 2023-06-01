import React, { useState, useEffect } from "react";
import Form from "../components/commons/Form";
import offersService from "../services/offersService";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { pick, isEmpty } from "lodash";

function UpdateOffer() {
  const { offerId } = useParams();
  const navigate = useNavigate();
  const [offer, setOffer] = useState();
  

  useEffect(() => {
    offersService.getOfferById(offerId).then((res) => {
      setOffer(res.data);
      console.log(res.data);
    }, []);
  }, [offerId]);
 
  const handleUpdate = (data) => { 
     const offerDetails = { ...data };
    offersService.updateOffer(offerId, offerDetails).then(() => {

  });
   
  };

if (isEmpty(offer)) return <div>Loading...</div>;


  return (
    <>
      <Form
        inputs={[
          { name: "titulo", label: "Título" },
          { name: "descripcion", label: "Descripcion" },
          { name: "requisitos", label: "Requisitos" },
        ]}
        header="Modificar Oferta"
        defaultValues={pick(offer, ["titulo", "descripcion", "requisitos"])}
        submitLabel="Modificar"
        onSubmit={handleUpdate}
      />
    </>
  );
}

export default UpdateOffer;
