import axios from "axios";
import NavBar from "../../../../components/NavBar";
import Banner from "../../../../components/Banner";
import Footer from "../../../../components/Footer";
import AdoptionForm from "../../../../components/AdoptionForm";

const Detail = ({ animal }) => {
  return (
    <>
      <NavBar />
      <Banner title="ADOPT" />
      <AdoptionForm animal={animal} />
      <Footer />
    </>
  );
};

export default Detail;

export const getServerSideProps = async (ctx) => {
  const {
    params: { id },
  } = ctx;

  const { data: animal } = await axios(
    `http://127.0.0.1:8000/api/animals/${id}`
  );

  return {
    props: {
      animal,
    },
  };
};
