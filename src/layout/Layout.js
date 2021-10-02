import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Progressbar} from '../components/progressbar/Progressbar';
import {Start} from '../pages/start/Start';

import './style.css';
import {Bar} from '../pages/bar/Bar';

export const Layout = (props) => {
  return (
    <div className="layout">
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
}