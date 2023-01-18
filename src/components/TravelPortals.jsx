import React from "react";
import travel from '../assets/travel.png';
import TravelForm from "./TravelForm";

const TravelPortals = () => {
  return (
    <section className="section-tools" id="nether">
      <h2 className="title">Travel Portals</h2>
      <img className="img-section" src={travel} alt="" />
      <p className="description">
        Viaja más rapido por tu mundo de Minecraft, por el nether utilizando los
        portales!
      </p>
      <TravelForm/>
    </section>
  );
};

export default TravelPortals;
