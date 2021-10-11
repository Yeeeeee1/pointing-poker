/* eslint-disable */ 
import React, { FC } from 'react';
import "./memberStatus.scss";

const MemberStatus: FC = () => {
  const members = [
    { id: 12, name: "alex" },
    { id: 321, name: "john", position: "junior front-end" },
    { id: 122, name: "alex asdas" },
    { id: 33121, name: "john" },
    { id: 12312, name: "alex" },
    { id: 31232121, name: "john", position: "middle back-end" },
    { id: 1123122, name: "alex" },
    { id: 3231231, name: "john", position: "senior full-stack" },
  ];

  return (
    <ul className="game-page__member-status">
    {members.map((item, index) => (
      <li className='game-page__member-status_in_progress' key={index.toString() + item.id}>
        in progress
      </li>
    ))}
  </ul>
  );
};

export default MemberStatus;