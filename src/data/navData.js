// navData.js
import { FaTachometerAlt, FaUsers, FaGavel, FaQuestionCircle, FaCog } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
export const navItems = [
  { path: "/", label: "Dashboard", icon: <FaTachometerAlt />},
  { path: "/partnership", label: "Partnership", icon: <FaUsers />},
  { path: "/users", label: "Users", icon: <FaUsers />},
  { path: "/chat", label: "Chat", icon: <MdChat />, className: "" },
  { path: "/social-media", label: "Social Media", icon: <IoShareSocialSharp />},
  { path: "/terms-conditions", label: "Terms & Conditions", icon: <FaGavel />},
  { path: "/faq", label: "FAQs", icon: <FaQuestionCircle /> },
  { path: "/admin-settings", label: "Admin Settings", icon: <FaCog /> },
];
