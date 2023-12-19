import HomePageBody from "../components/Body";
import Footer from "../components/Footer";
import NavigationBar from "../components/Navbar";

const Home = ({currentParent}) => {
  return (
    <div>
      <NavigationBar />
      <HomePageBody currentParent={currentParent} />
      <Footer />
    </div>
  );
};

export default Home;
