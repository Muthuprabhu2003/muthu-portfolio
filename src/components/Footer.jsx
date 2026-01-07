import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Muthu Prabhu</h3>
        <p>ReactJS Developer • Data Analyst • Network Engineer  </p>

        <div className="footer-socials">
          <a
            href="https://github.com/Muthuprabhu2003"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muthu-prabhu"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:muthuprabhu2003mp@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <span className="copyright">
          © {new Date().getFullYear()} Muthu Prabhu. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
