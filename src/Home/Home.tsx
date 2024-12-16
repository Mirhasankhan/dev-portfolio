import FloatingScrollToTopButton from "../components/Floating";
import Footer from "./Footer";
import App from "./demo";

const Home = () => {
  return (
    <div>
      <FloatingScrollToTopButton></FloatingScrollToTopButton>
      <div className=" md:px-12 py-3 bg-[#181424] ">
        <App></App>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
