
import React from "react";
import Card from "react-bootstrap/Card";

//passing the props
const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <Card className="player-card" style={{ width: "18rem" }}>
      <Card.Img
        className="player-image"
        variant="top"
        src={imageURL}
        alt=''
        
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
