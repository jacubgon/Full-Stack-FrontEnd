import React, { useEffect, useState } from "react";
import candidatesService from "../services/candidatesService";
import { CardActionArea } from "@mui/material";
import { FaHeart, FaCross } from "react-icons/fa";
import companiesService from "../services/companiesService";
import { authState } from "../services/authService";


function Candidates() {
  const { user } = authState();
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
   
      const companyId = user.companyId;
      console.log(companyId);
      companiesService
        .likedCandidates(companyId, candidateId)
        .then((res) => {
          console.log("Candidato agregado a los likes de la empresa");
        })
        .catch((err) => {
          console.log(err);
        });
   
  };

  return (
    <div>
      <div className="companyContainer">
        {candidates.map((candidate) => (
          <CardActionArea
            className="cardContainer"
            key={candidate._id}
          >
            <img src="" alt="" />
            <h4>{candidate.nombre}</h4>
            <p>{candidate.educacion}</p>
            <p>{candidate.habilidades}</p>
            <p>{candidate.experiencia}</p>
            <p>{candidate.ubicacion}</p>
            <div style={{ marginBottom: "10px" }}>
              <button onClick={() => handleLikeCandidate(candidate._id)}>
                <FaHeart />
              </button>
              <button style={{ marginLeft: "30px" }}>
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
