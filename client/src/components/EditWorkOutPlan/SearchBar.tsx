import { useContext, useState, ChangeEvent } from "react";
import { AppContext } from "../../contexts/AppContext";

const SearchBar = () => {
  const {
    AvailableExercises,
    SearchedExercises,
    setSearchedExercises,
    setNoSearchResult,
  } = useContext(AppContext);

  /*
Plan for this doc:
- When input is entered into the search bar, search the AvailableExercises and output any matching Exercises
*/

  // Searches up the user input in the available exercises, and set the searchedExercises state
  const searchExercise = (searched: string) => {
    setSearchedExercises(
      () =>
        //TODO: May want to add type of exercise for search as well
        AvailableExercises.filter((ex) =>
          ex.name.toLowerCase().includes(searched.toLowerCase())
        ) //if there is a match between user input and available exercise
    );
    if (searched !== "" && SearchedExercises.length === 0) {
      setNoSearchResult(true);
    }
  };

  // Function that passes the event to searchExercise
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    searchExercise(value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔎Search..."
        name="search"
        onChange={(event) => handleInputChange(event)}
      />
    </div>
  );
};

export default SearchBar;
