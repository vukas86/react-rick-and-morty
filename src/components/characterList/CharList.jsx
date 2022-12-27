import React, { useState, useContext } from "react";
import { CharacterContext } from "../../CharacterContext";

import Modals from "../modals/Modals";
import Card from "../card/Card";

import styles from "./CharList.module.css";

function CharList() {
  let [charInfo, setCharInfo] = useState(null);
  const [isLoading, setIsLoading] = useContext(CharacterContext);
  console.log(isLoading);

  return (
    <>
      <h2 className={styles.title}>Characters</h2>;
      {isLoading && (
        <Card
          onChoice={(info) => {
            setCharInfo(info);
          }}
        />
      )}
      {!isLoading && <div class="spinner"></div>}
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
