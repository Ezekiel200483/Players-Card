import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PlayersList from "./PlayersList";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Football Players Gallery</h1>
      </header>
      
        <PlayersList />
      
    </div>
  );
}

export default App;
