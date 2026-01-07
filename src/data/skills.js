import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaChartBar,
  FaMicrochip,
  FaNetworkWired,
} from "react-icons/fa";

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      { name: "Python", icon: FaPython },
      { name: "Power BI", icon: FaChartBar },
    ],
  },
  {
    category: "Embedded & Networking",
    items: [
      { name: "Embedded C", icon: FaMicrochip },
      { name: "Arduino", icon: FaMicrochip },
      { name: "Networking", icon: FaNetworkWired },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
    ],
  },
];
