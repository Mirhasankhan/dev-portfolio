import { useEffect, useState } from "react";
import "../App.css";
import Marquee from "react-fast-marquee";

type TSkill = {
  _id: string;
  skillName: string;
  image: string;
};

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("https://portfolio-server-rosy-mu.vercel.app/api/v1/skills")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
      });
  }, []);
  return (
    <div className=" mt-24">
      <div className="flex flex-col items-center my-12">
        <div className="flex items-center text-5xl font-bold text-white">
          <div className="arrow ml-4"></div>
          <span className="ml-4">My skills</span>
        </div>
      </div>
      <div>
        <Marquee direction="right" pauseOnHover>
          <div className="flex gap-12">
            {skills?.map((skill: TSkill) => (
              <div className="flex flex-col items-center gap-3">
                <img
                  className="rounded-full h-40 w-40"
                  src={skill.image}
                  alt=""
                />
                <p className="text-white">{skill.skillName}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
