import React, { useEffect, useState } from "react";
import companiesService from "../services/companiesService";
import { Card, CardActionArea, CardContent } from "@mui/material";
import {
  CardGiftcard,
  CardGiftcardRounded,
  CardMembership,
} from "@mui/icons-material";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    companiesService
      .getAllCompanies()
      .then((res) => {
        setCompanies(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>

      <div className="companyContainer">
        {companies.map((company) => (
          <CardActionArea 
          className='cardContainer'
          key={company._id}>
            <h4>{company.nombre}</h4>
            <p>{company.descripcion}</p>
            <p>{company.ubicacion}</p>
          </CardActionArea>
        ))}
      </div>
    </div>
  );
}

export default Companies;
