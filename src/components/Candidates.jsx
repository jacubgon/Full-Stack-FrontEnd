import React, { useEffect, useState } from "react";
import candidatesService from "../services/candidatesService";
import { Card, CardActionArea, CardContent } from "@mui/material";
import { FaHeart, FaCross } from "react-icons/fa";

function Candidates() {
  const [candidates, setCandidates] = useState([]);

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

  const handleLikeCandidate = (candidateId) => {
    // Lógica para manejar el evento de dar like al candidato
    console.log(`Dando like al candidato con ID: ${candidateId}`);
  };

  return (
    <div>
      <h2>Estos son los Candidatos</h2>
      <div className="companyContainer">
        {candidates.map((candidate) => (
          <CardActionArea key={candidate._id}
          style={{backgroundColor:'aquamarine',margin:'10px',
           boxShadow: '13px 9px 20px -4px rgba(7,122,128,0.66)',
           borderRadius:'10px'}}>
            <h4>{candidate.nombre}</h4>
            <p>{candidate.email}</p>
            <p>{candidate.educacion}</p>
            <p>{candidate.habilidades}</p>
            <p>{candidate.ubicacion}</p>
            <p>{candidate.experiencia}</p>
            {/* <p>{candidate.likes}</p>
          <p>{candidate.procesosPendientes}</p> */}
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
