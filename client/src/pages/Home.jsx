import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// import beginnerIcon from './images/beginner.svg';
// import intermediateIcon from './images/intermediate.svg';
// import advancedIcon from './images/advanced.svg';

const HomePage = () => {
  return (
    <main className="homepage">
      <section className="main-banner">
        <h1>Master Your Interviews with AI</h1>
        <p>Practice interview questions and conduct live interviews tailored to your skill level.</p>
      </section>

      <section className="cards">
        <h2>Choose Your Level</h2>
        <p>Select your skill level to start practicing and preparing for your interviews.</p>
        <div className="card beginner">
          {/* <img src={beginnerIcon} alt="Beginner" className="card-icon"/> */}
          <h3>Beginner</h3>
          <p>Start with fundamental questions and build a strong foundation.</p>
          <Link to="/beginner"><button>Start Practicing</button></Link>
        </div>
        <div className="card intermediate">
          {/* <img src={intermediateIcon} alt="Intermediate" className="card-icon"/> */}
          <h3>Intermediate</h3>
          <p>Enhance your skills with more challenging questions.</p>
          <button>Level Up</button>
        </div>
        <div className="card advanced">
          {/* <img src={advancedIcon} alt="Advanced" className="card-icon"/> */}
          <h3>Advanced</h3>
          <p>Master your expertise with advanced level questions.</p>
          <button>Challenge Yourself</button>
        </div>
      </section>

      <section className="extra-content">
        
      </section>
    </main>
  );
};

export default HomePage;
