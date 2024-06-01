import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ff5757] text-2xl">Hey there, I'm</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Maruf Siddique
        </h1>
        <h2 className="text-2xl sm:text-5xl font-bold text-[#8892b0] pt-2">
          I Design, Develop, and Analyze
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a solution-driven and experienced professional with a diverse
          skill set, proficient in analyzing requirements and developing project
          structures and architectures to enhance relationships and connections
          between companies and clients. <br />
          Currently working as a <strong>Software Engineer</strong> at
          <a
            href="https://www.sun21.co.jp/en/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:font-bold hover:border-b-2 hover:border-b-gray-300 font-medium"
          >
            <strong> SUN Co., Ltd.</strong>
          </a>
          <br />
          <span className="mt-10">
            I have over 3.5 years of experience in designing and developing
            scalable software. Throughout this time, I've worked on a variety of
            projects in areas such as{" "}
            <b className="italic">
              E-government, Blog, EdTech, and
              HealthTech
            </b>
            .
          </span>
        </p>
        <div>
          <Link to="contact" smooth={true} duration={500}>
            <button
              href=""
              className="text-white group border-2 px-6 py-3 my-2 flex flex-row items-center hover:bg-[#ff5757] hover:border-[#ff5757]"
            >
              Contact Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
