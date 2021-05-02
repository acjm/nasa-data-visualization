import React from "react";

// Components
import Navbar from "./components/layout/navbar/Navbar";
import Nasa from "./components/nasa/Nasa";

// State
import NasaState from "./context/nasa/nasaState";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <NasaState>
        <Nasa />
      </NasaState>
    </div>
  );
};

export default App;
