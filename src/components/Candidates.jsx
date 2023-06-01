import React, { useEffect, useState } from "react";
import candidatesService from "../services/candidatesService";
import { CardActionArea } from "@mui/material";
import { FaHeart, FaCross } from "react-icons/fa";
import companiesService from "../services/companiesService";
import { useAuth } from "../context/auth";



function Candidates() {
  const [candidates, setCandidates] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    candidatesService
      .getAllCandidates()
      .then((res) => {
        setCandidates(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLikeCandidate = (candidateId,empresaId) => {
    if (empresaId) {
      console.log(`Dando like al candidato con ID: ${candidateId} desde la empresa con ID: ${empresaId}`);
    } else {
      console.log("Error: La empresa no está logueada.");
    }
  };

  return (
    <div>
      <div className="companyContainer">
        {candidates.map((candidate) => (
          <CardActionArea 
          className='cardContainer' 
          key={candidate._id}
          >
            <img src="" alt="" />
            <h4>{candidate.nombre}</h4>
            <p>{candidate.educacion}</p>
            <p>{candidate.habilidades}</p>
            <p>{candidate.experiencia}</p>
            <p>{candidate.ubicacion}</p>
            <div style={{marginBottom: '10px'}}>
              <button onClick={() => handleLikeCandidate(candidate._id)}>
                <FaHeart />
              </button>
              <button style={{marginLeft:'30px'}}>
                <FaCross />
              </button>
            </div>
          </CardActionArea>
        ))}
      </div>
    </div>
  );
}

export default Candidates;
