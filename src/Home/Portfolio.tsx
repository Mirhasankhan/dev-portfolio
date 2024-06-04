import { useEffect, useState } from "react";
import { FaChrome } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import FullPageScroll from "../components/PageScroll";
import "../App.css";

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
    fetch("https://portfolio-server-rosy-mu.vercel.app/api/v1/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div>
      <div className="py-12 flex justify-center items-center text-5xl font-bold text-white">
        <div className="arrow ml-4"></div>
        <span className="ml-4">Recent Projects</span>
      </div>

      {projects?.map((project: TProject) => (
        <div
          key={project._id}
          className="rounded-md bg-black text-white mb-6 bg-opacity-40 py-12 px-3 hover:bg-opacity-50"
        >
          <div className="grid grid-cols-2 gap-6 min-h-64">
            <div>
              <h1 className="text-center text-xl py-2">
                {project.projectName}
              </h1>
              <p>{project.description}</p>
              <div className="flex justify-evenly mt-6">
                <a
                  className="
              flex gap-2 items-center"
                  target="_blank"
                  href={project.liveLink}
                >
                  <FaChrome className="text-xl"></FaChrome>
                  <p>Live Link</p>
                </a>
                <a
                  className="
              flex gap-2 items-center"
                  target="_blank"
                  href={project.clientLink}
                >
                  <FaGithub className="text-xl"></FaGithub>
                  <p>Client Link</p>
                </a>
                <a
                  className="
              flex gap-2 items-center"
                  target="_blank"
                  href={project.serverLink}
                >
                  <FaGithub className="text-xl"></FaGithub>
                  <p>Github Server</p>
                </a>
              </div>
            </div>
            <div>
              <FullPageScroll pageLInk={project.liveLink}></FullPageScroll>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
