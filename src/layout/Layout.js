import React from 'react';

import {ProgressbarContainer} from '../containers/progressbar/ProgressbarContainer';

import './style.css';

export const Layout = (props) => {
  return (
    <div className="layout">
      <ProgressbarContainer />
      <main className="layout__content">
        {props.children}
      </main>
    </div>
  );
}