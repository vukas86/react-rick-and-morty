import { useState } from "react";
import "./App.css";

import Header from "./components/header/Header";
import CharList from "./components/characterList/CharList";

function App() {
  return (
    <>
      <Header />;
      <CharList />
    </>
  );
}

export default App;
