import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import { AppContext } from "./context/Context";
import { Progressbar } from "../components/progressbar/Progressbar";
import { Start } from "../pages/start/Start";
import { Bar } from "../pages/bar/Bar";
import { GameOverHeli } from "../pages/game-over-heli/GameOverHeli";

import "./style.css";
import { Sleep } from "../components/sleep/Sleep";

export const Layout = () => {
  const { audioTrack, progressbarValue, endGame } = useContext(AppContext);

  if (progressbarValue >= 100) {
    endGame();
  }

  return (
    <div className="layout">
      {/* <Router> */}
      <Sleep />

      <ReactAudioPlayer src={audioTrack} autoPlay={true} controls={false} />
      <div className="layout__progress">
        <Progressbar />
      </div>

      <Switch>
        <Route path="/bar">
          <Bar />
        </Route>
        <Route path="/game-over-heli">
          <GameOverHeli />
        </Route>
        <Route path="/">
          <Start />
        </Route>
      </Switch>
      {/* </Router> */}
    </div>
  );
};
