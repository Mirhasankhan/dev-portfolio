import web from "../assets/about.jpeg";
import web1 from "../assets/about.jpeg";
import web2 from "../assets/about.jpeg";

const Blogs = () => {
  return (
    <div className="mt-24 mx-6 text-white">
      <h2 className="text-2xl font-bold my-3">Blogs</h2>
      <div className="flex gap-5">
        <div className="bg-[#033E48] p-3 rounded-lg flex flex-col justify-center items-center">
          <img className="w-full h-48 rounded-lg mx-auto" src={web} alt="" />
          <p className="text-justify my-3">
            JavaScript is a high-level programming language commonly used for
            web development. It allows dynamic and interactive behavior on
            webpages, providing functionality such as form validation,data
            manipulation.
          </p>
          <a href="https://with.zonayed.me/tag/javascript/" target="_blank">
            {" "}
            <button className="resourse-button">Resource</button>
          </a>
        </div>
        <div className="bg-[#033E48] p-3 rounded-lg flex flex-col justify-center items-center">
          <img className="w-full h-48 rounded-lg mx-auto" src={web2} alt="" />
          <p className="text-justify my-3">
            React is a JavaScript library used to build user interfaces for web
            and mobile applications. It allows developers to create reusable
            components and efficiently update and render UI elements based on
            changes in data.
          </p>
          <a
            href="https://medium.com/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%82-%E0%A6%AA%E0%A6%BE%E0%A6%A4%E0%A6%BE/%E0%A6%8F%E0%A6%95%E0%A6%9F%E0%A6%BF-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE-%E0%A6%B0%E0%A6%BF%E0%A6%8F%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%9F-%E0%A6%9F%E0%A6%BF%E0%A6%89%E0%A6%9F%E0%A7%8B%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%B2-d566b2e7e4c"
            target="_blank"
          >
            {" "}
            <button className="resourse-button">Resource</button>
          </a>
        </div>
        <div className="bg-[#033E48] p-3 rounded-lg flex flex-col justify-center items-center">
          <img className="w-full h-48 rounded-lg mx-auto" src={web1} alt="" />
          <p className="text-justify my-3">
            Next.js is a flexible React framework that gives you building blocks
            to create fast web applications. But what exactly do we mean by
            this? Let’s spend some time expanding on what React and Next.js are
            and how they can help.
          </p>
          <a
            href="https://hashdork.com/bn/%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%E0%A6%A6%E0%A7%87%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%AA%E0%A6%B0%E0%A6%AC%E0%A6%B0%E0%A7%8D%E0%A6%A4%E0%A7%80-js-%E0%A6%9F%E0%A6%BF%E0%A6%89%E0%A6%9F%E0%A7%8B%E0%A6%B0%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B2/"
            target="_blank"
          >
            {" "}
            <button className="resourse-button">Resource</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
