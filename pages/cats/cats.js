import Link from "next/link";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import useFilter from "../../hooks/[useFilter]";

const Cats = ({ cats, breeds: { breeds } }) => {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedNeutered, setSelectedNeutered] = useState("");

  const { filteredData } = useFilter(
    selectedBreed,
    selectedSex,
    selectedAge,
    selectedNeutered,
    cats
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
      <Banner title="CATS" />
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
            <button onClick={(e) => handleAgeChange(2, e)}>Kitten</button>
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
          {cats.length === 0 && <h2>There are no cats to adopt.</h2>}
          {filteredData.length === 0 && (
            <h2>There are no cats that match your selection.</h2>
          )}
          {filteredData.length > 0 &&
            filteredData.map(({ id, name, photo }) => (
              <div key={id} className="imageholder">
                <Image
                  src={"/" + photo}
                  alt="cat"
                  width={300}
                  height={300}
                  layout="responsive"
                />
                <p>{name}</p>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cats;

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
