import { useEffect, useState } from "react";
import "../App.css";
import Project from "../components/Project";

type TProject = {
  clientLink: string;
  description: string;
  features: string;
  liveLink: string;
  projectName: string;
  _id: string;
  serverLink: string;
};

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("https://portfolio-server-rosy-mu.vercel.app/api/v1/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div>
      <div
        className="text-center py-12 text-white"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <h1 className="ml-4 md:text-5xl text-2xl font-bold">My Projects</h1>
        <p className="text-orange-400 pt-2">
          My recent projects involve creating dynamic web applications using
          modern frameworks. These <br /> projects showcasing my ability to
          deliver robust and user-friendly solutions.
        </p>
      </div>
      <div
        className="grid grid-cols-1 px-4 md:grid-cols-3 gap-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {projects?.map((project: TProject) => (
          <Project key={project._id} details={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
