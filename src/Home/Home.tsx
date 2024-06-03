import Footer from "./Footer";
import App from "./demo";

const Home = () => {
  return (
    <div>
      <div className="px-4 md:px-24 py-3 bg-gradient-to-r from-black to-pink-500">
        <App></App>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
