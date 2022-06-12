import axios from "axios";
import NavBar from "../../../components/NavBar";
import Banner from "../../../components/Banner";
import Footer from "../../../components/Footer";
import Image from "next/image";

const Detail = ({ cat }) => {
  return (
    <>
      <NavBar />
      <Banner title={cat.name} />

      <div className="details">
        <div className="picture">
          <div className="imageholder">
            <Image
              src={"/" + cat.photo}
              alt="cat"
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
        </div>
        <div className="text"></div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;

export const getServerSideProps = async (ctx) => {
  const {
    params: { id },
  } = ctx;

  const { data: cat } = await axios(`http://127.0.0.1:8000/api/animals/${id}`);

  return {
    props: {
      cat,
    },
  };
};
