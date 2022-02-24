import React, { useState } from "react";
import TechnologyInfo from "./TechnologyInfo";
import "./Technology.css";

const Technology = ({ technology }) => {
  const [technologySelected, setTechnologySelected] = useState(0);

  const getTechnologyClick = (techIndex) => {
    setTechnologySelected(techIndex);
  };
  return (
    <div className="technology__container">
      <div className="technology__content">
        <div className="destination__title">
          <h1>
            <span>03</span> SPACE LAUNCH 101
          </h1>
        </div>
        {technology.map((vehicle, index) => {
          if (index === technologySelected) {
            return (
              <TechnologyInfo
                key={vehicle.name}
                name={vehicle.name}
                portrait={vehicle.images.portrait}
                landscape={vehicle.images.landscape}
                description={vehicle.description}
                technologySelected={technologySelected}
                getTechnologyClick={getTechnologyClick}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Technology;
