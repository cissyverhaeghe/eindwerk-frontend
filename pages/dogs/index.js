import Link from "next/link";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import useFilter from "../../hooks/[useFilter]";

const Index = ({ dogs, breeds: { breeds } }) => {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedNeutered, setSelectedNeutered] = useState("");

  const { filteredData } = useFilter(
    selectedBreed,
    selectedSex,
    selectedAge,
    selectedNeutered,
    dogs
  );

  const handleBreedChange = (id, e) => {
    id === selectedBreed ? setSelectedBreed("") : setSelectedBreed(id);
    e.target.className === "selected"
      ? (e.target.className = "")
      : (e.target.className = "selected");
  };

  const handleSexChange = (id, e) => {
    id === selectedSex ? setSelectedSex("") : setSelectedSex(id);
    e.target.className === "selected"
      ? (e.target.className = "")
      : (e.target.className = "selected");
  };

  const handleAgeChange = (id, e) => {
    id === selectedAge ? setSelectedAge("") : setSelectedAge(id);
    e.target.className === "selected"
      ? (e.target.className = "")
      : (e.target.className = "selected");
  };

  const handleNeuteredChange = (id, e) => {
    id === selectedNeutered ? setSelectedNeutered("") : setSelectedNeutered(id);
    e.target.className === "selected"
      ? (e.target.className = "")
      : (e.target.className = "selected");
  };

  return (
    <>
      <NavBar />
      <Banner title="DOGS" />
      <div className="display">
        <div className="filters">
          <div className="filter">
            <h2>Breed</h2>
            {breeds &&
              breeds.map(({ id, name }) => (
                <button key={id} onClick={(e) => handleBreedChange(id, e)}>
                  {name}
                </button>
              ))}
          </div>
          <div className="filter">
            <h2>Sex</h2>
            <button onClick={(e) => handleSexChange(1, e)}>Male</button>
            <button onClick={(e) => handleSexChange(2, e)}>Female</button>
          </div>
          <div className="filter">
            <h2>Age</h2>
            <button onClick={(e) => handleAgeChange(1, e)}>Puppy</button>
            <button onClick={(e) => handleAgeChange(3, e)}>Adult</button>
            <button onClick={(e) => handleAgeChange(4, e)}>Senior</button>
          </div>
          <div className="filter">
            <h2>Neutered</h2>
            <button onClick={(e) => handleNeuteredChange(1, e)}>Yes</button>
            <button onClick={(e) => handleNeuteredChange(0, e)}>No</button>
          </div>
        </div>
        <div className="animalGrid">
          {dogs.length === 0 && <h2>There are no dogs to adopt.</h2>}
          {filteredData.length === 0 && (
            <h2>There are no dogs that match your selection.</h2>
          )}
          {filteredData.length > 0 &&
            filteredData.map(({ id, name, photo }) => (
              <Link key={id} href={`dogs/dog/${id}`}>
                <div className="imageholder">
                  <Image
                    src={"/" + photo}
                    alt="cat"
                    width={300}
                    height={300}
                    layout="responsive"
                  />
                  <p>{name}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const { data: dogs } = await axios(
    `${process.env.NEXT_PUBLIC_BASEPATH}/api/dogs`
  );
  const { data: breeds } = await axios(
    `${process.env.NEXT_PUBLIC_BASEPATH}/api/species/2`
  );

  return {
    props: {
      dogs,
      breeds,
    },
  };
};
