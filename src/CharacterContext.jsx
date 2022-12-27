import React, { useState, useEffect, createContext } from "react";

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
  const [char, setChar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchCar() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      setChar(await response.json());
    } catch (err) {
      setError(err.message);
      console.error(`Something was wrong! ${err}`);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchCar();
  }, []);
  console.log(error);
  return (
    <CharacterContext.Provider
      value={[char, setChar, isLoading, setIsLoading, error, setError]}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};
