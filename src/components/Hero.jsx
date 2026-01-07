import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Hi, I’m <span>Muthu Prabhu</span>
        </h1>

        <h2>ReactJS Developer & Data Analyst & Network Engineer</h2>

        <p>
          I build modern, responsive, and scalable web applications using
          React, focusing on clean UI and great user experience.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="/resume.pdf" className="btn secondary" target="_blank">
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
