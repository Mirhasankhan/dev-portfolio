import "../App.css";

const Contact = () => {
  const handleMessageSend = () => {
    // e.preventDefault();
    // const form = e.target;
    // form.reset();
    alert("email send successfully");
  };

  return (
    <div className=" w-2/4 mx-auto">
      <h1 className="text-6xl font-semibold py-4 text-center text-white">
        Contact Me
      </h1>

      <form onSubmit={handleMessageSend} className="card-body  rounded-md mt-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold text-xl">
              Your Name
            </span>
          </label>
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered bg-purple-300 rounded-full text-black"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold text-xl">
              Email
            </span>
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered bg-purple-300 rounded-full text-black"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold text-xl">
              Message
            </span>
          </label>
          <textarea
            required
            className="p-3 rounded-xl text-black bg-purple-300"
            placeholder="Enter Your Message"
            name="message"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            className="custom-button cursor-pointer"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
