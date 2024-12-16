import { Link } from "react-scroll";

const About = () => {
  return (
    <div>
      <h1 data-aos="zoom-in"  data-aos-duration="1000" className="text-5xl text-white pb-6 font-bold text-center">
        About Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        <div className="text-white" data-aos="fade-right"  data-aos-duration="1000">
          <h1 className="text-center pb-6 text-3xl font-semibold">Summary</h1>
          <p>
            I'm a frontend web developer specializing in crafting the visual and
            interactive elements of websites and web applications. I use HTML
            for structuring content, CSS for styling, and JavaScript for adding
            functionality. I'm proficient with frameworks and libraries such as
            React, Angular, and Vue.js, which help me build responsive and
            dynamic user interfaces. My role involves ensuring cross-browser
            compatibility, optimizing performance, and working closely with
            designers and backend developers to create seamless user experiences
          </p>
          
        </div>
        <div className="text-white" data-aos="fade-left"  data-aos-duration="1000">
          <h1 className="text-center pb-6 text-3xl font-semibold">
            Professional Courses
          </h1>
          <p className="">
            <span className="font-bold">
              Programming Hero Web Development Course
            </span>
            — Programming Hero
          </p>
          <p className="py-3">
            <span className="font-bold">Next Level Web Development</span> -
            Programming Hero
          </p>
          <button className="custom-button">
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="link-logo"
            >
              Contact Me
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
