import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';

import {AppContext} from './context/Context';
import {Progressbar} from '../components/progressbar/Progressbar';
import {Start} from '../pages/start/Start';
import {Bar} from '../pages/bar/Bar';

import './style.css';

export const Layout = () => {
  const {audioTrack} = useContext(AppContext);
  return (
    <div className="layout">
      <ReactAudioPlayer src={audioTrack} autoPlay={true} controls={false} />
      <div className="layout__progress">
        <Progressbar />
      </div>
      <Router>
        <Switch>
          <Route path="/bar">
            <Bar />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
