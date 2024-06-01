import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-grey-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ff5757] text-white">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4  text-white">
          <div className="sm:text-right text-4xl font-bold  ">
            <p>
              Hello, I design & build things for the web. <br /> Nice to meet
              you. Please look around.
            </p>
          </div>
          <div className="sm:text-left">
            <p>
              I'm a junior developer who has recently started my journey as a
              web developer. I have a passion for building web applications and
              I'm always looking to learn new things. I'm a self-motivated
              learner with strong organisation, time management & communication
              skills. I'm also a team player who is always ready to learn new
              things. I'm able to work independently & collaboratively in a team
              with a meticulous attention to detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
