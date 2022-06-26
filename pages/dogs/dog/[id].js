import axios from "axios";
import NavBar from "../../../components/NavBar";
import Banner from "../../../components/Banner";
import Footer from "../../../components/Footer";
import AnimalDetail from "../../../components/AnimalDetail";

const Detail = ({ animal }) => {
  return (
    <>
      <NavBar />
      <Banner title="DOGS" />
      <AnimalDetail animal={animal} />
      <Footer />
    </>
  );
};

export default Detail;

export const getStaticPaths = async () => {
  const { data: animals } = await axios(
    `${process.env.NEXT_PUBLIC_BASEPATH}/api/animals`
  );

  return {
    paths: animals.map(({ id }) => ({
      params: { id: id.toString() },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const {
    params: { id },
  } = ctx;

  const { data: animal } = await axios(
    `${process.env.NEXT_PUBLIC_BASEPATH}/api/animals/${id}`
  );

  return {
    props: {
      animal,
    },
    revalidate: 3600,
  };
};
