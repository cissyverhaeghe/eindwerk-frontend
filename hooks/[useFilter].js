import { useEffect, useState } from "react";

export default function useFilter(
  selectedBreed,
  selectedSex,
  selectedAge,
  selectedNeutered,
  cats
) {
  const [filteredData, setFilteredData] = useState(cats);

  useEffect(() => {
    const filterByBreed = (filteredData) => {
      //if no breed is selected just return the data
      if (!selectedBreed) {
        return filteredData;
      }

      //if the breed is selected, filter the data
      const filteredCats = filteredData.filter(
        (cat) => cat.breed_id === selectedBreed.toString()
      );

      return filteredCats;
    };

    const filterBySex = (filteredData) => {
      if (!selectedSex) {
        return filteredData;
      }
      const filteredCats = filteredData.filter(
        (cat) => cat.sex_id === selectedSex.toString()
      );

      return filteredCats;
    };

    const filterByAge = (filteredData) => {
      if (!selectedAge) {
        return filteredData;
      }
      const filteredCats = filteredData.filter(
        (cat) => cat.agecategory_id === selectedAge.toString()
      );

      return filteredCats;
    };

    const filterByNeutered = (filteredData) => {
      if (selectedNeutered === "") {
        return filteredData;
      }
      const filteredCats = filteredData.filter(
        (cat) => cat.neutered === selectedNeutered.toString()
      );

      return filteredCats;
    };

    //run the data through all the filters
    let filteredData = filterByBreed(cats);
    filteredData = filterBySex(filteredData);
    filteredData = filterByAge(filteredData);
    filteredData = filterByNeutered(filteredData);

    //set the filteredDataState to this data
    setFilteredData(filteredData);
  }, [selectedBreed, selectedSex, selectedAge, selectedNeutered, cats]);

  return { filteredData };
}
