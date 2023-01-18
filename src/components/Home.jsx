import React from "react";
import hero from '../assets/hero.png'

const Home = () => {
  return (
    <main>
      <header className="hero">
        <img className="hero-img" src={hero} alt="" />

        <div className="hero-info">
          <h1 className="hero-title">
            <span>T</span>echnical <span>M</span>inecraft <span>T</span>ools
          </h1>
        </div>
      </header>


     
    </main>
  );
};

export default Home;
