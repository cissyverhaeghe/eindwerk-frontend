import axios from "axios";

const Index = (animals) => {
  return (
    <>
      <div>index</div>
      <pre>{JSON.stringify(animals, null, 2)}</pre>
    </>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const { data: animals } = await axios(
    "http://127.0.0.1:8000/api/animals?page=1"
  );

  return {
    props: {
      animals,
    },
  };
};
