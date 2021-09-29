/* eslint-disable */ 
import React, { FC } from "react";
import { Button } from "react-bootstrap";
import MemberCard from "../../MemberCard/MemberCard";
import Timer from "../../Timer/Timer";
import GamePageIssues from "./GamePageIssues/GamePageIssues";
import GamePageMembers from "./GamePageMembers/GamePageMembers";
import "./gamePage.scss";
import MemberStatus from "./GamePageMembers/MemberStatus/MemberStatus";

const GamePage: FC = () => {
  return (
    <div className="game-page__wrapper">
      <div className="game-page__main">
        <div className="game-page__main-title">
          <h2>Spring 23 pannimg...</h2>
          <div className="game-page__scrum-block">
            <div className="game-page__scrum-info">
              <h5 className="lobby-info__title">Scram master:</h5>
              <MemberCard name="Alex" position="lead software engineer" />
            </div>
            <div className='game-page__scrum-btn'>
              <Button variant="light">Stop Game</Button>
            </div>
          </div>
        </div>
        <div className="game-page__main-issues">
          <GamePageIssues/>
          <div className="game-page__run-time">
            <div className="run-time__timer">
              <Timer timeType='Minuts' value={5}/>
              <div className='run-time__color'>:</div>
              <Timer timeType='Seconds' value={45}/>
            </div>
            <div className="run-time__btns">
              <Button variant='primary'>Run Round</Button>
              <Button variant='primary'>Restart Round</Button>
              <Button variant='primary'>Next ISSUE</Button>
            </div>
          </div>

        </div>

      </div>
      <div className="game-page__players">
        <div className="game-page__players-score">
          <div className="game-page__players-title">
            Score:
            <MemberStatus/>
          </div>
        </div>
        <div className="game-page__players-players">
          <div className="game-page__players-title">
            Players:
          </div>
          <GamePageMembers/>
        </div>
      </div>
    </div>
  )
}

export default GamePage;
