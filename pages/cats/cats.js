import Link from "next/link";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import axios from "axios";
import Image from "next/image";

const cats = ({ cats, breeds: { breeds } }) => {
  console.log(breeds);

  return (
    <>
      <NavBar />
      <Banner title="CATS" />
      <div className="display">
        <div className="filters">
          <div className="filter">
            <h2>Breed</h2>
            {breeds &&
              breeds.map(({ id, name }) => <button key={id}>{name}</button>)}
          </div>
          <div className="filter">
            <h2>Breed</h2>
            <button>Exotic Shorthair</button>
            <button>Ragdoll</button>
            <button>Persian</button>
            <button>Maine Coon</button>
          </div>
          <div className="filter">
            <h2>Breed</h2>
            <button>Exotic Shorthair</button>
            <button>Ragdoll</button>
            <button>Persian</button>
            <button>Maine Coon</button>
          </div>
          <div className="filter">
            <h2>Breed</h2>
            <button>Exotic Shorthair</button>
            <button>Ragdoll</button>
            <button>Persian</button>
            <button>Maine Coon</button>
          </div>
        </div>
        <div className="animalGrid">
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              width={300}
              height={300}
              layout="responsive"
            />
            <p>name</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              width={300}
              height={300}
              layout="responsive"
            />
            <p>name</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              width={300}
              height={300}
              layout="responsive"
            />
            <p>name</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              width={300}
              height={300}
              layout="responsive"
            />
            <p>name</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              width={300}
              height={300}
              layout="responsive"
            />
            <p>name</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              width={300}
              height={300}
              layout="responsive"
            />
            <p>name</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              width={300}
              height={300}
              layout="responsive"
            />
            <p>name</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              width={300}
              height={300}
              layout="responsive"
            />
            <p>name</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              width={300}
              height={300}
              layout="responsive"
            />
            <p>name</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              width={300}
              height={300}
              layout="responsive"
            />
            <p>name</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              width={300}
              height={300}
              layout="responsive"
            />
            <p>name</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              width={300}
              height={300}
              layout="responsive"
            />
            <p>name</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              width={300}
              height={300}
              layout="responsive"
            />
            <p>name</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default cats;

export const getServerSideProps = async () => {
  const { data: cats } = await axios("http://127.0.0.1:8000/api/cats");
  const { data: breeds } = await axios("http://127.0.0.1:8000/api/species/1");

  return {
    props: {
      cats,
      breeds,
    },
  };
};
