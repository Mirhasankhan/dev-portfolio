const About = () => {
  return (
    <div>
      <h1 className="text-5xl text-white pb-6 font-bold text-center">
        About Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        <div className="text-white">
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
        <div className="text-white">
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
        </div>
      </div>
    </div>
  );
};

export default About;
