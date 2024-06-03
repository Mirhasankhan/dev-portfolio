import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center border-t bg-gray-300">
      <div className="flex text-5xl justify-start gap-8 mt-6 ">
        <a href="https://www.facebook.com/mir.hasan.794/">
          <FaFacebook className="border-2 p-1 rounded-full border-cyan-400" />
        </a>
        <a href="https://www.instagram.com/mirhasan762/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D&fbclid=IwAR3EuwwUbRqTJMYlvLLG8ws-9TmJuzjT2uLzdET00rF85VhPQngebY97oN0">
          <FaInstagram className="border-2 p-1 rounded-full border-cyan-400" />
        </a>
        <a href="https://www.linkedin.com/in/mir-hasan-9879a7277/">
          <FaLinkedin className="border-2 p-1 rounded-full border-cyan-400" />
        </a>
        <a href="https://github.com/Mirhasankhan">
          <FaGithub className="border-2 p-1 rounded-full border-cyan-400" />
        </a>
      </div>
      <div className="flex gap-6 items-center mt-4 mb-4 ">
        <div className="flex items-center gap-2">
          <FaPhone></FaPhone>
          <h1>+880 1839033505</h1>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <FaPhone></FaPhone>
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
