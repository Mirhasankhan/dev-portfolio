import "../App.css";
import Lottie from "lottie-react";
import contactUs from "../assets/contact.json";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { notification } from "antd";
import { FormEvent } from "react";

const Contact = () => {
  const handleMessageSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    notification.success({
      message: "Message Sent Successfully",
      description: "I will reach you out very soon, thank for your message.",
    });
  };

  return (
    <div className="my-8 px-4">
      <h1 className="text-3xl font-semibold pt-16 text-center text-white">
        Contact Me
      </h1>
      <p className="text-center pb-6 text-orange-400">
        Any need, Feel free to contact me
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <h1 className="text-xl font-bold pb-3 text-white">
            Send Me A Message
          </h1>
          <form onSubmit={(e) => handleMessageSend(e)}>
            <div className="flex gap-4">
              <input
                required
                type="text"
                placeholder="your name"
                className="bg-[#1c222a] border w-full p-2 mb-4 rounded-md"
              />
              <input
                type="email"
                required
                placeholder="email"
                className="bg-[#1c222a] border w-full p-2 mb-4 rounded-md"
              />
            </div>
            <div className="flex gap-4">
              <input
                required
                type="text"
                placeholder="subject"
                className="bg-[#1c222a] border w-full p-2 mb-4 rounded-md"
              />
              <input
                required
                type="number"
                placeholder="phone number"
                className="bg-[#1c222a] border w-full p-2 mb-4 rounded-md"
              />
            </div>
            <textarea
              required
              placeholder="your message"
              rows={7}
              className="border w-full p-2 rounded-md bg-[#1c222a]"
              name=""
              id="message"
            ></textarea>
            <div className="flex flex-col items-center">
              <button
                className="custom-button w-2/3 md:w-1/2 mt-4"
                type="submit"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-1 hidden md:block text-white">
          <div className="flex flex-col items-center">
            <Lottie
              style={{ height: "250px", width: "250px" }}
              animationData={contactUs}
              loop={true}
            />
          </div>
          <h1>
            Are You Looking for a Expert Frontend Developer For Your Comapny? I
            am available to assist you.
          </h1>
          <div className="flex items-center pt-2 gap-1">
            <FaLocationDot className="text-xl text-orange-400"></FaLocationDot>
            <h1>Feni, Chittagong, Bangladesh</h1>
          </div>
          <div className="flex items-center gap-1 py-2">
            <IoMdMail className="text-xl text-orange-400"></IoMdMail>
            <h1>mirhasan000034@gmail.com</h1>
          </div>
          <div className="flex items-center gap-1">
            <MdLocalPhone className="text-xl text-orange-400"></MdLocalPhone>
            <h1>+880-1678506798 (WhatsApp)</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
