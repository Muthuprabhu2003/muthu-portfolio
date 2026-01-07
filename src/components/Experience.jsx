import { experience } from "../data/experience";
import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h3 className="section-title">Experience</h3>

      <div className="timeline">
        {experience.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot" />

            <div className="timeline-content">
              <h4>{item.role}</h4>
              <span className="company">
                {item.company} • {item.duration}
              </span>

              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
