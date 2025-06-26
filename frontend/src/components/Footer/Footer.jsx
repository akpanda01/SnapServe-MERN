import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const socialLinks = [
  {
    path: "https://github.com/akpanda01",
    icon: <AiFillGithub className="group-hover:text-white w-5 h-5" />,
    name: "GitHub"
  },
  {
    path: "https://www.linkedin.com/in/akanksha-panda-5aa242231/",
    icon: <RiLinkedinFill className="group-hover:text-white w-5 h-5" />,
    name: "LinkedIn"
  },
];

const quickLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/services", display: "Services" },
  { path: "/blog", display: "Blog" },
  { path: "/find-a-provider", display: "Find Helper" },
  { path: "/appointment", display: "Appointment" },
  { path: "/locations", display: "Locations" },
  { path: "/contact", display: "Contact" },
  { path: "/faq", display: "FAQs" },
  { path: "/privacy", display: "Privacy" }
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primaryColor text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Quick Links - Horizontal */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 border-b border-teal-100 pb-8">
          {quickLinks.map((item, index) => (
            <Link 
              key={index}
              to={item.path} 
              className="text-sm hover:text-teal-100 transition-colors whitespace-nowrap"
            >
              {item.display}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/home" className="mb-6">
              <img src={logo1} alt="SnapServe Logo" className="h-10" />
            </Link>
            <p className="text-center md:text-left mb-6">
              Connecting you with trusted professionals for all your home service needs.
            </p>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link, index) => (
                <a
                  href={link.path}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center group hover:bg-teal-500 hover:border-teal-500 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="text-teal-400 mr-3 flex-shrink-0" />
                <p>A-501, Leon Orbit</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="text-teal-400 mr-3" />
                <p>+91 4567890234</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <AiOutlineMail className="text-teal-400 mr-3" />
                <p>contact@snapserve.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="mb-4 text-center md:text-left">Subscribe to our updates</p>
            <div className="flex w-full max-w-xs">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l text-gray-900 w-full focus:outline-none"
              />
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-r transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-teal-100 text-center">
          <p className="text-sm">
            &copy; {year} SnapServe. All rights reserved. | 
            Developed by <span className="text-teal-100">Akanksha Panda</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;