import React, { useState, useEffect } from "react";

import Modals from "../Modals";
import Card from "../card/Card";

import styles from "./CharList.module.css";

function CharList() {
  let [charInfo, setCharInfo] = useState(null);
  return (
    <>
      <h2 className={styles.title}>Characters</h2>;
      <Card
        onChoice={(info) => {
          setCharInfo(info);
        }}
      />
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
