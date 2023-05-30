import React, { useEffect, useState } from "react";
import offersService from "../services/offersService";
import { Card, CardActionArea, CardContent, IconButton } from "@mui/material";
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import Icon from '@mui/material/Icon';

<Icon>star</Icon>;


function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    offersService
      .getAllOffers()
      .then((res) => {
        setOffers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Estas son las Ofertas</h2>

      <div className="companyContainer">
        {offers.map((offer) => (
          <CardActionArea key={offer._id}>
            <h4>{offer.titulo}</h4>
            <p>{offer.descripcion}</p>
            <p>{offer.requisitos}</p>
            <p>{offer.fechaPublicacion}</p>
            {offer.empresa && (
        <p>
          {offer.empresa.nombre} {/* Acceder al nombre de la empresa */}
        </p>
      )}
            <p>{offer.empresa}</p>
            <p>{offer.candidatos.candidato}</p>
            <Icon>star</Icon>
          </CardActionArea>
        ))}
      </div>
    </div>
  );
}

export default Offers;