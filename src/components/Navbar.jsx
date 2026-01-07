import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ["home", "about", "skills", "projects", "experience", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">MP</div>

      {/* Desktop Links */}
      <ul className="nav-links">
        {links.map((item) => (
          <li key={item}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={handleLinkClick}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
