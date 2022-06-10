import axios from "axios";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import About from "../components/About";
import Cats from "../components/Cats";

const Index = ({ cats, amount }) => {
  return (
    <>
      <NavBar />
      <Banner />
      <About />
      <Cats allCats={cats} amount={amount} />
      {/* <ul>
        {animals && (
          <div>
            {animals.map(({ id, name, species }) => (
              <li key={id}>{name + " " + species.name}</li>
            ))}
          </div>
        )}
      </ul>
      <pre>{JSON.stringify(animals, null, 2)}</pre> */}
    </>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const { data: cats } = await axios("http://127.0.0.1:8000/api/cats");

  return {
    props: {
      cats
    },
  };
};
