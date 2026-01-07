import { skills } from "../data/skills";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-heading">Skills</h2>

      <div className="skills-grid">
        {skills.map((group, index) => (
          <div className="skill-card" key={index}>
            <h3>{group.category}</h3>
            <div className="skill-items">
              {group.items.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <skill.icon />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
