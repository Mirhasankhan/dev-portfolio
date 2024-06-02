import { Link } from "react-scroll";
import aboutImg from "../assets/about.jpeg";

const About = () => {
  return (
    <div className="grid grid-cols-2 gap-5 px-6">
      <img
        className=" h-[400px] w-[400px]  rounded-full"
        src={aboutImg}
        alt=""
      />
      <div className="text-white">
        <h1 className="text-4xl font-bold">About Me</h1>
        <h2 className="text-2xl font-medium text-cyan-400 py-4">
          MERN Stack Developer
        </h2>
        <p>
          My journey in web development began with a curiosity for coding and a
          desire to bring ideas to life on the internet. Over the years, I have
          honed my skills in front-end and back-end development, mastering
          languages such as HTML, CSS, JavaScript,React,Nodejs,ExpressJs.
          Additionally, I am currently pursuing a Bachelor of Technology(B.Tech)
          in Computer Science & Engineering from Haldia Institute Of
          Technology(WestBengal,India).
        </p>
        <ul>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="link-logo"
            >
              <button className="custom-button mt-4">Contact Me</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
