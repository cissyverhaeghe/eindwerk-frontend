const Cats = ({ animals }) => {
  return <div>Cats</div>;
};

export default Cats;

export const getServerSideProps = async () => {
  const { data: animals } = await axios("http://127.0.0.1:8000/api/cats");

  return {
    props: {
      animals,
    },
  };
};
