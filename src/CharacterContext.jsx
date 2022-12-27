import React, { useState, useEffect, createContext } from "react";

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
  const [char, setChar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    setIsLoading(false);
    fetchCar();
    setIsLoading(true);
  }, []);

  return (
    <CharacterContext.Provider value={[char, setChar, isLoading, setIsLoading]}>
      {props.children}
    </CharacterContext.Provider>
  );
};
