import boot from "../assets/about.jpeg";
import boot1 from "../assets/about.jpeg";
import boot2 from "../assets/about.jpeg";
import boot3 from "../assets/about.jpeg";
import boot4 from "../assets/about.jpeg";
import boot6 from "../assets/about.jpeg";
import boot7 from "../assets/about.jpeg";

const Skills = () => {
  return (
    <div className="mx-16 mt-24">
      <h1 className="text-2xl font-bold text-white mb-12">Skills</h1>
      <div
        className="grid grid-cols-4 gap-8 mx-24"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <div>
          <img className="w-24 h-24 rounded-full mb-6" src={boot1} alt="" />
          <img className="w-24 h-24 rounded-full mb-6" src={boot2} alt="" />
          <img className="w-24 h-24 rounded-full mb-6" src={boot4} alt="" />
        </div>
        <div>
          <img className="w-24 h-24 rounded-full mb-6" src={boot3} alt="" />
          <img className="w-24 h-24 rounded-full mb-6" src={boot4} alt="" />
          <img className="w-24 h-24 rounded-full mb-6" src={boot6} alt="" />
        </div>
        <div>
          <img className="w-24 h-24 rounded-full mb-6" src={boot1} alt="" />
          <img className="w-24 h-24 rounded-full mb-6" src={boot4} alt="" />
          <img className="w-24 h-24 rounded-full mb-6" src={boot2} alt="" />
        </div>
        <div>
          <img className="w-24 h-24 rounded-full mb-6" src={boot} alt="" />
          <img className="w-24 h-24 rounded-full mb-6" src={boot7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
