import React, { useState, useEffect } from "react";

import style from "./Card.module.css";

function Card({ onChoice }) {
  const [char, setChar] = useState([]);

  async function fetchCar() {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]"
      );

      setChar(await response.json());
    } catch (err) {
      console.error(`Something was wrong! ${err}`);
    }
  }
  console.log(char);

  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <>
      <div className={style.grid}>
        {char?.map((character) => (
          <a
            onClick={() => {
              onChoice(character);
            }}
            className={style.user}
            key={character.id}
          >
            <img src={character.image} alt={character.name} />
            <div className={style.userInfo}>
              <h2>{character.name}</h2>
              <h3>
                <span>&#x2022;</span>
                {character.species}
              </h3>
              <h3>{character.origin.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default Card;
