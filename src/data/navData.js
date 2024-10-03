// navData.js
import { FaTachometerAlt, FaUsers, FaComments, FaShareAlt, FaGavel, FaQuestionCircle, FaCog } from "react-icons/fa";

export const navItems = [
  { path: "/", label: "Dashboard", icon: <FaTachometerAlt />, className: "bg-orange-500 text-white" },
  { path: "/partnership", label: "Partnership", icon: <FaUsers />, className: "" },
  { path: "/users", label: "Users", icon: <FaUsers />, className: "" },
  { path: "/chat", label: "Chat", icon: <FaComments />, className: "" },
  { path: "/social-media", label: "Social Media", icon: <FaShareAlt />, className: "" },
  { path: "/terms-conditions", label: "Terms & Conditions", icon: <FaGavel />, className: "" },
  { path: "/faq", label: "FAQs", icon: <FaQuestionCircle />, className: "" },
  { path: "/admin-settings", label: "Admin Settings", icon: <FaCog />, className: "" },
];
