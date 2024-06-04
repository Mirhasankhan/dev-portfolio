import { useEffect, useState } from "react";
import "../App.css";

type TSkill = {
  _id: string;
  skillName: string;
  image: string;
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  console.log(skills);
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
      <div
        className="grid grid-cols-4 gap-8 "
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        {skills?.map((skill: TSkill) => (
          <div key={skill._id} className="flex flex-col items-center">
            <img
              className="w-32 h-32 rounded-full mb-6"
              src={skill.image}
              alt=""
            />
            <p className="text-white">{skill.skillName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
