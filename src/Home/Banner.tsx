import profieImg from "../assets/cort-tie.jpg";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import DownloadResume from "../components/DownloadResume";

const Banner = () => {
  return (
    <div className="text-white grid grid-cols-2 gap-5 my-24 px-6">
      <div className="mt-5">
        <h1 className="text-2xl font-semibold">Hello, It's Me</h1>
        <h1 className="text-7xl bold py-4">Mir Hasan</h1>
        <p className="text-3xl">
          I'm a <span className="text-cyan-400">Frontend Developer</span>
        </p>
        <p className="pt-3">
          I love the world of web development and thrive on the ever-evolving
          technologies that emerge today.
        </p>
        <div className="flex text-4xl justify-start gap-8 mt-6 text-cyan-400">
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
        <div className="mt-5 flex gap-6">
          <DownloadResume></DownloadResume>
        </div>
      </div>
      <div>
        <img
          className="h-[400px] w-[400px] rounded-full"
          src={profieImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
