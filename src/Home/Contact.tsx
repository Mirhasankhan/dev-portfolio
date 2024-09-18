import "../App.css";
import Lottie from "lottie-react";
import contactUs from "../assets/Animation - 1719936528315.json";
import Swal from "sweetalert2";

const Contact = () => {
  // const handleMessageSend = () => {
  //   // e.preventDefault();
  //   // const form = e.target;
  //   // form.reset();
  //   alert("email send successfully");
  // };

  return (
    <div className="bg-gray-500">
      <h1 className="text-3xl mt-12 font-semibold py-4 text-center text-white">
        Contact Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div>
          <h1 className="text-xl font-bold pb-3 text-white">
            Send Us A Message
          </h1>
          <form className=" p-4">
            <label htmlFor="">
              Your Name
              <span className="text-red-500">*</span>
            </label>
            <input type="text" className="border w-full p-2 mb-4 rounded-sm" />
            <label htmlFor="">
              Your Email
              <span className="text-red-500">*</span>
            </label>
            <input type="text" className="border w-full p-2 mb-4 rounded-sm" />
            <label className="block" htmlFor="">
              Your Message
              <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={5}
              className="border w-full rounded-sm"
              name=""
              id="message"
            ></textarea>
            <button
              onClick={() =>
                Swal.fire("Your Message Has Been Send To Mir Hasan")
              }
              className="block rounded-md bg-black text-white p-3"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        <Lottie
          style={{ height: "400px", width: "600px" }}
          animationData={contactUs}
          loop={true}
        />
      </div>
    </div>
  );
};

export default Contact;
