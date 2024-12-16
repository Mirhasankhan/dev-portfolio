import { Link } from "react-scroll";
import Banner from "./Banner";
import About from "./About";
import Blogs from "./Blogs";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import DownloadResume from "../components/DownloadResume";

const App = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center  p-2 px-5  text-white">
          <div className="flex gap-1 items-center">
            <h1 className="bg-orange-400 rounded-full font-semibold p-2">MH</h1>
          <h1 className="font-extrabold text-3xl">Mir Hasan<span className="text-orange-400">.</span></h1>
          </div>
          <div>
            <ul className="p-4 flex w-full h-full gap-6  font-medium">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={1000}
                  className="link-logo"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  className="link-logo"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="blogs"
                  smooth={true}
                  duration={1000}
                  className="link-logo"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={1000}
                  className="link-logo"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="skill"
                  smooth={true}
                  duration={1000}
                  className="link-logo"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={1000}
                  className="link-logo"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <DownloadResume></DownloadResume>
        </div>
        <div>
          <div id="home">
            <Banner></Banner>
          </div>
          <div id="about">
            <About></About>
          </div>
          <div id="skill">
            <Skills></Skills>
          </div>

          <div id="portfolio">
            <Portfolio></Portfolio>
          </div>

          <div id="blogs">
            <Blogs></Blogs>
          </div>

          <div id="contact">
            <Contact></Contact>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
