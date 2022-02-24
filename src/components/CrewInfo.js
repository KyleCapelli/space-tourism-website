import React from "react";

const CrewInfo = ({ name, image, role, bio, crewSelected, getCrewClick }) => {
  return (
    <div className="crew-info__content-container">
      <div className="crew-info__image">
        <img
          src={image}
          alt={name}
          className={`crew-info__image-index-${crewSelected}`}
        />
        <div className="crew-info__line"></div>
      </div>
      <div className="crew-info__contents">
        <div className="crew-info__selection">
          <div
            className={`crew-info__circle ${
              crewSelected === 0 ? "active" : "non-active"
            }`}
            onClick={() => getCrewClick(0)}
          ></div>
          <div
            className={`crew-info__circle ${
              crewSelected === 1 ? "active" : "non-active"
            }`}
            onClick={() => getCrewClick(1)}
          ></div>
          <div
            className={`crew-info__circle ${
              crewSelected === 2 ? "active" : "non-active"
            }`}
            onClick={() => getCrewClick(2)}
          ></div>
          <div
            className={`crew-info__circle ${
              crewSelected === 3 ? "active" : "non-active"
            }`}
            onClick={() => getCrewClick(3)}
          ></div>
        </div>
        <div className="crew-info__role">
          <h3>{role}</h3>
        </div>
        <div className="crew-info__name">
          <h2>{name}</h2>
        </div>
        <div className="crew-info__bio">
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default CrewInfo;
