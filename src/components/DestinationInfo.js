import React from "react";

const DestinationInfo = ({
  image,
  name,
  description,
  distance,
  travel,
  destinationSelected,
  getDestinationClick,
}) => {
  return (
    <div className="destination-info__content-container">
      <div className="destination-info__image">
        <img src={image} alt={name} />
      </div>
      <div className="destination-info__contents">
        <div className="destination-info__names-container">
          <div className="destination-info__title">
            <div
              className={`${
                destinationSelected === "Moon"
                  ? "destination-info__selected"
                  : "destination-info__not-selected"
              }`}
            ></div>
            <h3
              className={
                destinationSelected === "Moon"
                  ? "destination-info__change-color"
                  : ""
              }
              onClick={() => getDestinationClick("Moon")}
            >
              MOON
            </h3>
          </div>
          <div className="destination-info__title">
            <div
              className={`${
                destinationSelected === "Mars"
                  ? "destination-info__selected"
                  : "destination-info__not-selected"
              }`}
            ></div>
            <h3
              className={
                destinationSelected === "Mars"
                  ? "destination-info__change-color"
                  : ""
              }
              onClick={() => getDestinationClick("Mars")}
            >
              MARS
            </h3>
          </div>
          <div className="destination-info__title">
            <div
              className={`${
                destinationSelected === "Europa"
                  ? "destination-info__selected"
                  : "destination-info__not-selected"
              }`}
            ></div>
            <h3
              className={
                destinationSelected === "Europa"
                  ? "destination-info__change-color"
                  : ""
              }
              onClick={() => getDestinationClick("Europa")}
            >
              EUROPA
            </h3>
          </div>
          <div className="destination-info__title">
            <div
              className={`${
                destinationSelected === "Titan"
                  ? "destination-info__selected"
                  : "destination-info__not-selected"
              }`}
            ></div>
            <h3
              className={
                destinationSelected === "Titan"
                  ? "destination-info__change-color"
                  : ""
              }
              onClick={() => getDestinationClick("Titan")}
            >
              TITAN
            </h3>
          </div>
        </div>
        <div className="destination-info__main-title">
          <h1>{name}</h1>
        </div>
        <div className="destination-info__description">
          <p>{description}</p>
        </div>
        <div className="destination-info__line"></div>
        <div className="destination-info__statistics-container">
          <div className="destination-info__distance">
            <h5 className="destination-info__sub-title">AVG. DISTANCE</h5>
            <p className="destination-info__sub-statistic">{distance}</p>
          </div>
          <div className="destination-info__travel">
            <h5 className="destination-info__sub-title">EST. TRAVEL TIME</h5>
            <p className="destination-info__sub-statistic">{travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationInfo;
