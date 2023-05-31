import React, { useEffect, useState } from "react";
import offersService from "../services/offersService";
import { Card, CardActionArea, CardContent, IconButton } from "@mui/material";
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import Icon from '@mui/material/Icon';
import { FaHeart, FaCross } from "react-icons/fa";

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

      <div className="companyContainer">
        {offers.map((offer) => (
          <CardActionArea 
          className='cardContainer'
          key={offer._id}>
            <h4>{offer.titulo}</h4>
            <p>{offer.descripcion}</p>
            <p>{offer.requisitos}</p>
            <p>{offer.fechaPublicacion}</p>
            <button onClick={() => handleLikeCandidate(candidate._id)}>
                <FaHeart />
              </button>
          </CardActionArea>
        ))}
      </div>
    </div>
  );
}

export default Offers;