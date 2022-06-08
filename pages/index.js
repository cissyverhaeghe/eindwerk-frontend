import axios from "axios";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import About from "../components/About";

const Index = ({ animals }) => {
  console.log(animals);

  return (
    <>
      <NavBar />
      <Banner />
      <About />
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
  const { data: animals } = await axios(
    "http://127.0.0.1:8000/api/animals?page=1"
  );

  return {
    props: {
      animals,
    },
  };
};