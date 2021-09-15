/* eslint-disable */ 
import React, { FC } from "react";
import { Button } from "react-bootstrap";
import MemberCard from "../../MemberCard/MemberCard";
import Timer from "../../Timer/Timer";
import GamePageIssues from "./GamePageIssues/GamePageIssues";
import GamePageMembers from "./GamePageMembers/GamePageMembers";

const GamePage: FC = () => {
  return (
    <div className="game-page__wrapper" style={{display: 'flex'}}>
      <div className="game-page__main" style={{width: '60%'}}>
        <div className="game-page__main-title">
          <h2>Spring 23 pannimg...</h2>
          <div className="game-page__scrum-block" style={{display: 'flex', justifyContent: 'space-around'}}>
            <div className="game-page__scrum-info">
              <h5 className="lobby-info__title">Scram master:</h5>
              <MemberCard name="Alex" position="lead software engineer" />
            </div>
            <div className='game-page__scrum-btn' style={{alignSelf: 'center'}}>
              <Button variant="light">Stop Game</Button>
            </div>
          </div>
        </div>
        <div className="game-page__main-issues" style={{display: 'flex'}}>
          <GamePageIssues/>
          <div className="game-page__run-time">
            <div className="run-time__timer" style={{display: 'flex'}}>
              <Timer name='Minuts' position='5'/>
              <div className='run-time__colon' style={{fontSize: '40px'}}>:</div>
              <Timer name='Seconds' position='45'/>
            </div>
            <div className="run-time__btns" style={{display: 'flex'}}>
              <Button variant='primary'>Run Round</Button>
              <Button variant='primary'>Restart Round</Button>
              <Button variant='primary'>Next ISSUE</Button>
            </div>
          </div>

        </div>

      </div>
      <div className="game-page__players" style={{width: '40%', borderLeft: '2px solid black', display: 'flex'}}>
        <div className="game-page__players-score" style={{}}>
          players list
        </div>
        <div className="game-page__players-players" style={{}}>
          Players:
          <GamePageMembers/>
        </div>
      </div>
    </div>
  )
}

export default GamePage;
