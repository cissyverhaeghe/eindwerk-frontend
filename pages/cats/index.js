import Link from "next/link";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import useFilter from "../../hooks/[useFilter]";

const Index = ({ cats, breeds: { breeds } }) => {
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

  const handleBreedChange = (e) => {
    e.target.value === selectedBreed
      ? setSelectedBreed("")
      : setSelectedBreed(e.target.value);
  };

  const handleSexChange = (e) => {
    e.target.value === selectedSex
      ? setSelectedSex("")
      : setSelectedSex(e.target.value);
  };

  const handleAgeChange = (e) => {
    e.target.value === selectedAge
      ? setSelectedAge("")
      : setSelectedAge(e.target.value);
  };

  const handleNeuteredChange = (e) => {
    e.target.value === selectedNeutered
      ? setSelectedNeutered("")
      : setSelectedNeutered(e.target.value);
  };

  return (
    <>
      <NavBar />
      <Banner title="CATS" />
      <div className="display">
        <div className="filters">
          <div className="filter">
            <h2>Breed</h2>
            <select value={selectedBreed} onChange={handleBreedChange}>
              <option value="">All</option>
              {breeds &&
                breeds.map(({ id, name }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
            </select>
          </div>
          <div className="filter">
            <h2>Sex</h2>
            <select value={selectedSex} onChange={handleSexChange}>
              <option value="">All</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </div>
          <div className="filter">
            <h2>Age</h2>
            <select value={selectedAge} onChange={handleAgeChange}>
              <option value="">All</option>
              <option value="2">Kitten</option>
              <option value="3">Adult</option>
              <option value="4">Senior</option>
            </select>
          </div>
          <div className="filter">
            <h2>Neutered</h2>
            <select value={selectedNeutered} onChange={handleNeuteredChange}>
              <option value="">All</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
        </div>
        <div className="animalGrid">
          {cats.length === 0 && <h2>There are no cats to adopt.</h2>}
          {filteredData.length === 0 && (
            <h2>There are no cats that match your selection.</h2>
          )}
          {filteredData.length > 0 &&
            filteredData.map(({ id, name, photo }) => (
              <Link key={id} href={`cats/cat/${id}`}>
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

export const getStaticProps = async () => {
  const { data: cats } = await axios(
    `${process.env.NEXT_PUBLIC_BASEPATH}/api/cats`
  );
  const { data: breeds } = await axios(
    `${process.env.NEXT_PUBLIC_BASEPATH}/api/species/1`
  );

  return {
    props: {
      cats,
      breeds,
    },
    revalidate: 3600,
  };
};

