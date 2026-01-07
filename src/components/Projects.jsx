import { projects } from "../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-heading">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="project-category">{project.category}</p>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank">GitHub</a>
              )}
              {project.live && <a href={project.live}>Live</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
