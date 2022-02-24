import React, { useState } from "react";
import CrewInfo from "./CrewInfo";
import "./Crew.css";

const Crew = ({ crew }) => {
  const [crewSelected, setCrewSelected] = useState(0);

  const getCrewClick = (crewIndex) => {
    setCrewSelected(crewIndex);
  };
  return (
    <div className="crew__container">
      <div className="crew__content">
        <div className="destination__title">
          <h1>
            <span>02</span>MEET YOUR CREW
          </h1>
        </div>
        {crew.map((person, index) => {
          if (index === crewSelected) {
            return (
              <CrewInfo
                key={person.name}
                name={person.name}
                image={person.images.webp}
                role={person.role}
                bio={person.bio}
                crewSelected={crewSelected}
                getCrewClick={getCrewClick}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Crew;
