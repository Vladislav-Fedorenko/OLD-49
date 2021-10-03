import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { Dance } from "../pages/dance/Dance";

import { AppContext } from "./context/Context";
import { Progressbar } from "../components/progressbar/Progressbar";
import { Start } from "../pages/start/Start";
import { Bar } from "../pages/bar/Bar";
import { GameOverHeli } from "../pages/game-over-heli/GameOverHeli";
import { HeliSound } from "../components/helisound/HeliSound";

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

      <ReactAudioPlayer
        src={audioTrack}
        autoPlay={true}
        controls={false}
        volume={0.4}
      />
      <div className="layout__progress">
        <Progressbar />
      </div>

      <HeliSound />

      <Switch>
        <Route path="/bar">
          <Bar />
        </Route>
        <Route path="/dance">
          <Dance />
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
