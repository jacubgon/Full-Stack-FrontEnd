import React, { useEffect, useState } from "react";
import offersService from "../services/offersService";
import { CardActionArea } from "@mui/material";
import { FaHeart, FaCross } from "react-icons/fa";
import { useAuth } from "../context/auth";
import companiesService from "../services/companiesService";
import { Link } from "react-router-dom";
import AlertDialogSlide from "../components/alert";

function Offers() {
  const [offers, setOffers] = useState([]);

  const [user] = useAuth();

  useEffect(() => {
    companiesService
      .getCompanyOffers(user._id)
      .then((res) => setOffers(res.data))
      .catch((err) => console.log(err));
  }, []);

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

  const handleDeleteOffer = (id) => {
    
    offersService
      .deleteOffer(id)
      .then((res) => {
        setOffers(offers.filter((offer) => offer._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Link to="/offers/new">CREAR OFERTA</Link>

      <div className="companyContainer">
        {offers.map((offer) => (
          <CardActionArea className="cardContainer" key={offer._id}>
            <h4>{offer.titulo}</h4>
            <p>{offer.descripcion}</p>
            <p>{offer.requisitos}</p>
            <p>{offer.fechaPublicacion}</p>
            <button onClick={() => handleLikeCandidate(candidate._id)}>
              <FaHeart />
            </button>
            <Link to={"/offers/update/" + offer._id}>Modificar Oferta</Link>
            <br />
            <AlertDialogSlide 
            onAgree={() => handleDeleteOffer(offer._id)}
            textButton={"Esta seguro que desea borrar la oferta?"}
            labelButton={'Borrar'}
            />
          
          </CardActionArea>
        ))}
      </div>
    </div>
  );
}

export default Offers;
