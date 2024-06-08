import Footer from "./Footer";
import App from "./demo";

const Home = () => {
  return (
    <div>
      <div className="px-4 md:px-24 py-3 bg-black">
        <App></App>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
