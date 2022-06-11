import Link from "next/link";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Cats = ({ cats, breeds: { breeds } }) => {
  const [filteredData, setFilteredData] = useState(cats);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedNeutered, setSelectedNeutered] = useState("");

  useEffect(() => {
    const filterByBreed = (filteredData) => {
      if (!selectedBreed) {
        return filteredData;
      }

      const filteredCats = filteredData.filter(
        (cat) => cat.breed_id === selectedBreed.toString()
      );

      return filteredCats;
    };

    const filterBySex = (filteredData) => {
      console.log(filteredData);
      if (!selectedSex) {
        return filteredData;
      }
      const filteredCats = filteredData.filter(
        (cat) => cat.sex_id === selectedSex.toString()
      );

      return filteredCats;
    };

    let filteredData = filterByBreed(cats);
    filteredData = filterBySex(filteredData);
    setFilteredData(filteredData);
  }, [selectedBreed, selectedSex, selectedAge, selectedNeutered, cats]);

  const handleBreedChange = (id, e) => {
    id === selectedBreed ? setSelectedBreed("") : setSelectedBreed(id);
    console.log(e.target.className);
    e.target.className === "selected"
      ? (e.target.className = "")
      : (e.target.className = "selected");
  };

  const handleSexChange = (id, e) => {
    id === selectedSex ? setSelectedSex("") : setSelectedSex(id);
    console.log(e.target.className);
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
            <button onClick={() => setSelectedAge(2)}>Kitten</button>
            <button onClick={() => setSelectedAge(3)}>Adult</button>
            <button onClick={() => setSelectedAge(4)}>Senior</button>
          </div>
          <div className="filter">
            <h2>Neutered</h2>
            <button onClick={() => setSelectedNeutered(1)}>Yes</button>
            <button onClick={() => setSelectedNeutered(0)}>No</button>
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
