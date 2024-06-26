import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/696934ac-0b1b-4c42-930e-07b248f120c4"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ff5757] text-gray-300 ">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            {" "}
            Submit the form below or shoot me an email- demo
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        ></input>

        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        ></input>

        <textarea
          className="bg-[#ccd6f6] p-2"
          cols="30"
          rows="10"
          placeholder="Enter Your Message"
          name="message"
        ></textarea>

        <button
          className="text-white border-2 hover:bg-[#ff5757] hover:border-[#ff5757]  px-4 py-3 my-8 mx-auto flex items-center"
          type="submit"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
