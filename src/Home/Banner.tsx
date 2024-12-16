import profieImg from "../assets/cort-tie.jpg";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebookF } from "react-icons/fa";
import DownloadResume from "../components/DownloadResume";
import { useEffect, useState } from "react";

const Banner = () => {
  const roles = ["Frontend Developer", "MERN Stack Developer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-5 my-6 md:my-16 px-6">
      <div className="mt-5">
        <h1 className="text-5xl font-semibold">Hello, I'm Mir Hasan</h1>
        <p className="text-3xl pt-3 font-semibold">
          I'm a <span className="text-orange-400 ">{roles[currentIndex]}</span>
        </p>
        <p className="pt-3">
          I specialize in creating dynamic web applications, with a robust foundation in both front-end and back-end development
        </p>
        <div className="flex text-6xl justify-start gap-8 mt-6">
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
        <div className="relative">
          <div className="mt-5 flex gap-6 animate-bounce-y">
            <DownloadResume></DownloadResume>
          </div>
        </div>
        {/* <div className="mt-5 flex gap-6">
          <DownloadResume></DownloadResume>
        </div> */}
      </div>
      <div className="ml-auto relative">
        <img
          className="h-84 md:h-[400px] w-full md:w-[400px] rounded-full border-2 border-orange-400"
          src={profieImg}
          alt=""
        />
        <div className="absolute bottom-16 -left-24 md:-left-48 w-full flex justify-center">
          <div className="relative">
            <h1 className="font-semibold bg-[#181424]  border text-center px-8 py-2 rounded-full border-orange-400 animate-bounce-y">
              30+ <br />
              <span className="text-orange-400">Completed Project</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
