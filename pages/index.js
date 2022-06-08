import axios from "axios";
import Link from "next/link";

const Index = ({ animals }) => {
  console.log(animals);

  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cats">Cats</Link>
        </li>
        <li>
          <Link href="/dogs">Dogs</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      <div>index</div>
      <ul>
        {animals && (
          <div>
            {animals.map(({ id, name, species }) => (
              <li key={id}>{name + " " + species.name}</li>
            ))}
          </div>
        )}
      </ul>
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
