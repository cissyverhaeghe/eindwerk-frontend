import axios from "axios";

const Detail = ({ cat }) => {
  return <div>{cat.name}</div>;
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
