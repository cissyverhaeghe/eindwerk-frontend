import axios from "axios";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import About from "../components/About";
import Cats from "../components/Cats";
import Dogs from "../components/Dogs";
import Footer from "../components/Footer";

const Index = ({ cats, dogs }) => {
  console.log(dogs);
  console.log(cats);
  return (
    <>
      <NavBar />
      <Banner />
      <About />
      <Cats allCats={cats} />
      <Dogs allDogs={dogs} />
      <Footer />
    </>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const { data: cats } = await axios("http://127.0.0.1:8000/api/cats");
  const { data: dogs } = await axios("http://127.0.0.1:8000/api/dogs");

  return {
    props: {
      cats,
      dogs,
    },
  };
};
