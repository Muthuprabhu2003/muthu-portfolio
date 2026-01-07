import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="section-title">Contact</h3>

        <h2>Let’s build something great together</h2>
        <p>
          I’m open to ReactJS Developer opportunities and freelance projects.
          Feel free to reach out.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope />
              <span>muthuprabhu2003mp@gmail.com</span>
            </div>
            <div className="info-item">
              <FaPhoneAlt />
              <span>+91 8220600164</span>
            </div>
            <div className="info-item">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/muthu-prabhu"
                target="_blank"
              >
                linkedin.com/in/muthu-prabhu
              </a>
            </div>
            <div className="info-item">
              <FaGithub />
              <a
                href="https://github.com/Muthuprabhu2003"
                target="_blank"
              >
                github.com/Muthuprabhu2003
              </a>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea rows="5" placeholder="Your Message" />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
