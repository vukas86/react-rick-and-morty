import React, { useState, useContext } from "react";
import { CharacterContext } from "../../../CharacterContext";

import styles from "./SearchBar.module.css";

function SearchBar() {
  const [char, setChar] = useContext(CharacterContext);

  async function handleSearch(e) {
    try {
      const rmCharacter = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${e.target.value}`
      );
      const rmCharacterData = await rmCharacter.json();
      setChar(rmCharacterData.results);
    } catch (err) {
      console.error(`Something was wrong! ${err}`);
    }
  }
  console.log(char);

  const clearSearchHandler = () => {
    console.log("hi");
  };

  return (
    <>
      <input
        type="search"
        className={styles.search}
        id="search"
        name="search"
        placeholder="Search"
        onChange={handleSearch}
      />
    </>
  );
}

export default SearchBar;
