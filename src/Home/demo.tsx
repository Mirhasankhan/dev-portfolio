import { Link } from "react-scroll";
import Banner from "./Banner";
import About from "./About";
import Blogs from "./Blogs";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import DownloadResume from "../components/DownloadResume";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <div className="relative flex justify-between items-center p-2 px-5  text-white">
          <div className="flex gap-1 items-center">
            <h1 className="bg-orange-400 rounded-full font-semibold p-2">MH</h1>
            <h1 className="font-extrabold text-3xl">
              Mir Hasan<span className="text-orange-400">.</span>
            </h1>
          </div>
          <div>
            <ul className="hidden p-4 md:flex w-full h-full gap-6  font-medium">
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
                  Projects
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
          <div className="md:hidden">
            {!show && (
              <IoMdMenu
                onClick={() => setShow(!show)}
                className="md:hidden text-xl"
              ></IoMdMenu>
            )}
            {show && (
              <TiDelete
                onClick={() => setShow(!show)}
                className="md:hidden text-2xl"
              ></TiDelete>
            )}

            {show && (
              <ul
                data-aos="fade-down"
                data-aos-duration="2000"
                className="absolute top-14 left-0 flex flex-col gap-4 w-full  bg-[#1c222a] md:hidden p-4  font-medium"
              >
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
                    Projects
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
            )}
          </div>
          <div className="hidden md:block">
            <DownloadResume></DownloadResume>
          </div>
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
