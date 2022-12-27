import React, { useContext, useState } from "react";
import { CharacterContext } from "../../CharacterContext";

import style from "./Card.module.css";

function Card({ onChoice }) {
  const [char, setChar] = useContext(CharacterContext);

  return (
    <>
      <div className={style.grid}>
        {Array.isArray(char)
          ? char.map((character) => (
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
                  <h3 className={style.inhName}>{character.origin.name}</h3>
                </div>
              </a>
            ))
          : null}
      </div>
    </>
  );
}

export default Card;
