import React from 'react';
import {useHistory} from 'react-router';

import {Button} from '../../components/button/Button';

import "./style.scss";

export const HappyEnd = () => {
  const history = useHistory();
  return (
    <div className="game-over">
      <Button
        text="Congratulations!"
        onClick={() => {}}
        className="game-over__text"
        textColor="#0fa"
      />
      <Button
        text="Your trip is over!"
        onClick={() => {}}
        className="game-over__reason"
        textColor="#f5f94b"
      />
      <Button
        text="Go to start"
        className="game-over__go-start"
        onClick={() => history.push("/start")}
        buttonStyle="outlined"
        textColor="#f5f94b"
      />
    </div>
  );
};
