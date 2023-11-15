
import React from "react";
import Player from "./player.js";
import players from "./Players.js";
 // Import the players array from players.js

const PlayersList = () => {
  return (
    <div>
      <h2>Players Details </h2>
      <div className="players-container">
        {players.map((player, index) => (
          <Player
            key={index}
            name={player.name}
            team={player.team}
            nationality={player.nationality}
            jerseyNumber={player.jerseyNumber}
            age={player.age}
            imageURL={player.imageURL}
            
          />
        ))}
      </div>
    </div>
  );
};
// Define default props for the Player component
Player.defaultProps = {
  name: "Alisha Lehmann",
  team: "Aston Villa",
  nationality: "Switzerland",
  jerseyNumber: "7",
  age: "24",
  imageUrl: "",
};


export default PlayersList;
