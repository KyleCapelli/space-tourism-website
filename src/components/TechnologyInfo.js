import React, { useState, useEffect } from "react";

const TechnologyInfo = ({
  name,
  landscape,
  portrait,
  description,
  technologySelected,
  getTechnologyClick,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowSize = () => {
    console.log(window.innerWidth);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  });
  return (
    <div className="tech-info__content-container">
      <div className="tech-info__image">
        <img src={windowWidth < 1200 ? landscape : portrait} alt={name} />
      </div>
      <div className="tech-info__contents">
        <div className="x">
          <div className="tech-info__selection">
            <div
              onClick={() => getTechnologyClick(0)}
              className={`tech-info__circle ${
                technologySelected === 0 ? "active" : "non-active"
              }`}
            >
              <p>1</p>
            </div>
            <div
              onClick={() => getTechnologyClick(1)}
              className={`tech-info__circle ${
                technologySelected === 1 ? "active" : "non-active"
              }`}
            >
              <p>2</p>
            </div>
            <div
              onClick={() => getTechnologyClick(2)}
              className={`tech-info__circle ${
                technologySelected === 2 ? "active" : "non-active"
              }`}
            >
              <p>3</p>
            </div>
          </div>
        </div>
        <div className="y">
          <div className="tech-info__terminology">
            <h3>THE TERMINOLOGY...</h3>
          </div>
          <div className="crew-info__name">
            <h2>{name}</h2>
          </div>
          <div className="tech-info__description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyInfo;
