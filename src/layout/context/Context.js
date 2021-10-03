import React, { useState } from "react";
import { useHistory } from "react-router";

export const AppContext = React.createContext(null);

export const Context = ({ children }) => {
  const [progressbarValue, setProgressbarValue] = useState(0);
  const [audioTrack, setAudioTrack] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const history = useHistory();

  const endGame = () => {
    if (!gameOver) {
      setGameOver(true);
      history.push("/game-over-heli");
    }
  };

  const contextValue = {
    progressbarValue,
    setProgressbarValue,
    audioTrack,
    setAudioTrack,
    gameOver,
    endGame,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
