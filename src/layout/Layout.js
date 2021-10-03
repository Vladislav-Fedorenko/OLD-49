import React, { useContext, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import { AppContext } from "./context/Context";

import { OrderTaxi } from "../pages/order-taxi/OrderTaxi";
import { ChooseTaxi } from "../pages/choose-taxi/ChooseTaxi";
import { Dance } from "../pages/dance/Dance";
import { Start } from "../pages/start/Start";
import { Taxi } from "../pages/taxi/Taxi";
import { Bar } from "../pages/bar/Bar";
import { GameOver } from "../pages/game-over/GameOver";
import { Progressbar } from "../components/progressbar/Progressbar";
import { Sleep } from "../components/sleep/Sleep";
import { HeliSound } from "../components/helisound/HeliSound";
import { Flat }        from '../pages/flat/Flat';
import { HappyEnd } from "../pages/happy-end/HappyEnd";

import "./style.css";

export const Layout = () => {
  const { audioTrack, progressbarValue, endGame } = useContext(AppContext);

  if (progressbarValue >= 100) {
    endGame();
  }

  return (
    <div className="layout">
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
        <Route path="/bar">               <Bar/>             </Route>
        <Route path="/dance">             <Dance/>           </Route>
        <Route path="/order-taxi">        <OrderTaxi />      </Route>
        <Route path="/choose-taxi">       <ChooseTaxi />     </Route>
        <Route path="/taxi">              <Taxi />           </Route>
        <Route path="/flat">              <Flat />           </Route>
        <Route path="/game-over">         <GameOver />       </Route>
        <Route path="/happy-end">         <HappyEnd />       </Route>
        <Route path="/">                  <Start />          </Route>
      </Switch>
    </div>
  );
};
