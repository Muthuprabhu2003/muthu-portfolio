import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="section-title">About Me</h3>

        <div className="about-section">
          <div className="about-text">
            <h2>
              Crafting <span>clean & scalable</span> web experiences
            </h2>

            <p>
              I’m <strong>Muthu Prabhu</strong>, a ReactJS Developer with a strong
              eye for UI/UX design. I enjoy turning complex problems into
              simple, intuitive, and responsive user interfaces.
            </p>

            <p>
              I have hands-on experience building real-world applications like
              e-commerce platforms, dashboards, and automation tools using
              React, JavaScript, and modern frontend practices.
            </p>

            <p>
              Currently, I’m focused on improving performance, accessibility,
              and clean architecture while preparing for ReactJS Developer
              roles.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <h4>Frontend</h4>
              <p>React, JavaScript, HTML, CSS</p>
            </div>
            <div className="about-card">
              <h4>Tools</h4>
              <p>Git, GitHub, Power BI</p>
            </div>
            <div className="about-card">
              <h4>Focus</h4>
              <p>Performance, UX, Clean Code</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
