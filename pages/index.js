import axios from "axios";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import About from "../components/About";
import Cats from "../components/Cats";
import Dogs from "../components/Dogs";
import Footer from "../components/Footer";

const Index = ({ cats, dogs }) => {
  return (
    <>
      <NavBar />
      <Banner title="LAB ANIMAL SEARCHES HOME" />
      <About />
      <Cats allCats={cats} />
      <Dogs allDogs={dogs} />
      <Footer />
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const { data: cats } = await axios(
    `${process.env.NEXT_PUBLIC_BASEPATH}/api/cats`
  );
  const { data: dogs } = await axios(
    `${process.env.NEXT_PUBLIC_BASEPATH}/api/dogs`
  );

  return {
    props: {
      cats,
      dogs,
    },
    revalidate: 3600,
  };
};
