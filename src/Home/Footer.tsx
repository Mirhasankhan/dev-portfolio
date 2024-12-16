import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaPhone,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col items-center  bg-[#1c222a] text-white px-3">
      <div className="flex text-6xl justify-start gap-6 md:gap-8 mt-6">
        <a href="https://www.facebook.com/mir.hasan.794/">
          <FaFacebookF className="border p-3 hover:bg-orange-400 rounded-full border-orange-400" />
        </a>
        <a href="https://www.instagram.com/mirhasan762/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D&fbclid=IwAR3EuwwUbRqTJMYlvLLG8ws-9TmJuzjT2uLzdET00rF85VhPQngebY97oN0">
          <FaInstagram className="border p-3 hover:bg-orange-400 rounded-full border-orange-400" />
        </a>
        <a href="https://www.linkedin.com/in/mir-hasan-frontend-dev/">
          <FaLinkedin className="border p-3 hover:bg-orange-400 rounded-full border-orange-400" />
        </a>
        <a href="https://github.com/Mirhasankhan">
          <FaGithub className="border p-3 hover:bg-orange-400 rounded-full border-orange-400" />
        </a>
      </div>
      <div className="md:flex gap-6 items-center mt-4 mb-4 ">
        <div className="flex items-center gap-2">
          <FaPhone></FaPhone>
          <h1>+880 1839033505</h1>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <IoLogoWhatsapp className=""></IoLogoWhatsapp>
            <h1>+880 1678506798</h1>
          </div>
        </div>
      </div>
      <p className="mb-12">
        Copyright © 2024 - All right reserved by Mir Hasan
      </p>
    </div>
  );
};

export default Footer;
