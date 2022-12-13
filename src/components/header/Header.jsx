import React from "react";
import SearchBar from "./searchBar/SearchBar";
import logo from "../../assets/images/ram_logo.png";

import styles from "./header.module.css";

function Header() {
  return (
    <>
      <nav className={styles.headerNav}>
        <ul>
          <li>
            <img src={logo} alt="logo" />
          </li>
        </ul>
        <ul>
          <SearchBar />
        </ul>
      </nav>
    </>
  );
}

export default Header;
