/* eslint-disable */ 
import React, { FC } from "react";
import { Button } from "react-bootstrap";
import MemberCard from "../../MemberCard/MemberCard";
import GamePageIssues from "./GamePageIssues/GamePageIssues";

const GamePage: FC = () => {
  return (
    <div className="game-page__wrapper" style={{display: 'flex'}}>
      <div className="game-page__main" style={{width: '70%'}}>
        <h2>Spring 23 pannimg...</h2>
        <div className="game-page__scrum-block">
          <div className="game-page__scrum-info">
            <h5 className="lobby-info__title">Scram master:</h5>
            <MemberCard name="Alex" position="lead software engineer" />
          </div>
          <Button variant="light">Stop Game</Button>
        </div>
        <GamePageIssues/>
      </div>
      <div className="game-page__players" style={{width: '30%', borderLeft: '2px solid black'}}>
        players list
      </div>
    </div>
  )
}

export default GamePage;
