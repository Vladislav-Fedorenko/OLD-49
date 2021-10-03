import React, {useContext} from 'react';
import {useHistory} from 'react-router';

import {AppContext} from '../../layout/context/Context';
import {Button} from '../../components/button/Button';

import "./style.scss";

export const GameOver = () => {
  const {gameOverReason} = useContext(AppContext);
  const history = useHistory();
  return (
    <div className="game-over">
      GAME OVER
      <br/>
      { gameOverReason !== '' ? gameOverReason : null }
      <Button text="Go to start" onClick={() => history.push("/start")} />
    </div>
  );
};
