import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <input
      type="search"
      className={styles.search}
      id="search"
      name="search"
      placeholder="Search"
    ></input>
  );
}

export default SearchBar;
