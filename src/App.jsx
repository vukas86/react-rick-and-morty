import "./App.css";

import Header from "./components/header/Header";
import CharList from "./components/characterList/CharList";
import { CharacterProvider } from "./CharacterContext";

function App() {
  return (
    <CharacterProvider>
      <Header />;
      <CharList />
    </CharacterProvider>
  );
}

export default App;
