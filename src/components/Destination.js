import React, { useState } from "react";
import DestinationInfo from "./DestinationInfo";
import "./Destination.css";

const Destination = ({ destinations }) => {
  const [destinationSelected, setDestinationSelected] = useState("Moon");

  const getDestinationClick = (destination) => {
    setDestinationSelected(destination);
  };

  return (
    <div className="destination__container">
      <div className="destination__content">
        <div className="destination__title">
          <h1>
            <span>01</span>PICK YOUR DESTINATION
          </h1>
        </div>
        {destinations.map((destination) => {
          if (destination.name === destinationSelected)
            return (
              <DestinationInfo
                key={destination.name}
                name={destination.name}
                image={destination.images.webp}
                description={destination.description}
                distance={destination.distance}
                travel={destination.travel}
                destinationSelected={destinationSelected}
                getDestinationClick={getDestinationClick}
              />
            );
        })}
      </div>
    </div>
  );
};

export default Destination;
