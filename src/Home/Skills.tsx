import { useEffect, useState } from "react";
import "../App.css";
import Skill from "../components/Skill";


type TSkill = {
  _id: string;
  skillName: string;
  image: string;
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [active, setActive] = useState('front')

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
    <div className="mt-16" data-aos="fade-right"  data-aos-duration="2000">

      <p className="text-center pb-12 text-6xl font-semibold text-white">
        My skills
      </p>

      <div className="pb-6">
        <div className="flex justify-center gap-6 text-white pb-6 text-xl">
          <h1 onClick={() => setActive("front")} className={`cursor-pointer px-5 py-1 rounded-full ${active === "front" ? "border border-orange-400" : ""
            }`}>Front End</h1>
          <h1 onClick={() => setActive("back")} className={`cursor-pointer px-5 py-1 rounded-full ${active === "back" ? "border border-orange-400" : ""
            }`}>Back End</h1>
          <h1 onClick={() => setActive("tools")} className={`cursor-pointer px-5 py-1 rounded-full ${active === "tools" ? "border border-orange-400" : ""
            }`}>Tools</h1>
        </div>
        <div>
          {
            active == "front" && <div>
              <div className="grid grid-cols-6 gap-4">
                {skills?.map((skill: TSkill) => (
                  <Skill data={skill}></Skill>
                ))}
              </div>
            </div>
          }
          {
            active == "back" && <div>
              <div className="grid grid-cols-6 gap-4">
                {skills?.slice(0, 3).map((skill: TSkill) => (
                  <Skill data={skill}></Skill>
                ))}
              </div>
            </div>
          }
          {
            active == "tools" && <div>
              <div className="grid grid-cols-6 gap-4">
              {skills?.slice(0, 6).map((skill: TSkill) => (
                  <Skill data={skill}></Skill>
                ))}
              </div>
            </div>
          }
        </div>
      </div>

    </div>
  );
};

export default Skills;
