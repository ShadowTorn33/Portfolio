import React from "react";
import { useState, useEffect } from "react";
import { send } from "emailjs-com";

const ContactForm = () => {
  const [toSend, setToSend] = useState({
    first_name: "",
    last_name: "",
    message: "",
    reply_to: "",
  });
  console.log(toSend);
  const onSubmit = (e) => {
    e.preventDefault();
    send("service_8tppht9", "template_nc0c6zf", toSend, "qHB2hsyi_6MRZFy76");
    setToSend({
      first_name: "",
      last_name: "",
      message: "",
      reply_to: "",
    });
  };

  const handleChange = (e) => {
    const userInput = { ...toSend };
    userInput[e.target.name] = e.target.value;
    setToSend(userInput);
  };

  useEffect(() => {
    setToSend({
      first_name: "",
      last_name: "",
      message: "",
      reply_to: "",
    });
  }, []);

  return (
    
      <div name='contact' className="bg-gradient-to-r from-[#a4c0c5] to-[#c9d8d2] flex flex-col h-screen justify-center items-center">
    <p className="text-7xl pb-28 font-bold">Contact Me</p>
        <form className="form" onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              value={toSend.first_name}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg"
            />
            <label className="sr-only" htmlFor="last_name">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={toSend.last_name}
              onChange={handleChange}
              className="border text-[#56615c] border-gray-300 p-3 rounded-lg"
            />
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <input
              type="textarea"
              name="message"
              placeholder="Message"
              value={toSend.message}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg"
            />
            <label className="sr-only" htmlFor="reply_to">
              Your Email
            </label>
            <input
              type="text"
              name="reply_to"
              placeholder="Your Email"
              value={toSend.reply_to}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
            Submit
          </button>
              </div>
        </form>
      </div>
  );
};

export default ContactForm;
