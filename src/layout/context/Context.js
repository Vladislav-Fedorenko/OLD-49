import React, { useState } from "react";
import { useHistory } from "react-router";

export const AppContext = React.createContext(null);

export const Context = ({ children }) => {
  const [progressbarValue, setProgressbarValue] = useState(0);
  const [audioTrack, setAudioTrack] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverReason, setGameOverReason] = useState('');

  const history = useHistory();

  const endGame = () => {
    if (!gameOver) {
      setGameOver(true);
      setGameOverReason('You drank too much!');
      history.push("/game-over");
    }
  };

  const reset = () => {
    setProgressbarValue(0);
    setAudioTrack(null);
    setGameOver(false);
    setGameOverReason('');
  }

  const contextValue = {
    progressbarValue,
    setProgressbarValue,
    audioTrack,
    setAudioTrack,
    gameOver,
    endGame,
    gameOverReason,
    setGameOverReason,
    reset,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
