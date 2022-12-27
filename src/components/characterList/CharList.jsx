import React, { useState, useContext } from "react";
import { CharacterContext } from "../../CharacterContext";

import Modals from "../modals/Modals";
import Card from "../card/Card";

import styles from "./CharList.module.css";

function CharList() {
  let [charInfo, setCharInfo] = useState(null);
  const [char, setChar, isLoading, setIsLoading, error, setError] =
    useContext(CharacterContext);

  let content = (
    <Card
      onChoice={(info) => {
        setCharInfo(info);
      }}
    ></Card>
  );

  if (error) {
    content = <p className={styles.errorMsg}>{error}</p>;
  }

  if (isLoading) {
    <div className={styles.spinner}></div>;
  }

  return (
    <>
      <h2 className={styles.title}>Characters</h2>;{content}
      {charInfo && (
        <Modals
          charInfo={charInfo}
          handleClose={() => {
            setCharInfo(null);
          }}
        />
      )}
    </>
  );
}

export default CharList;
