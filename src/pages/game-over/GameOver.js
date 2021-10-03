import React, {useContext} from 'react';

import {AppContext} from '../../layout/context/Context';

import "./style.scss";

export const GameOver = () => {
  const {gameOverReason} = useContext(AppContext);
  return (
    <div className="game-over">
      GAME OVER
      <br/>
      { gameOverReason !== '' ? gameOverReason : null }
    </div>
  );
};
