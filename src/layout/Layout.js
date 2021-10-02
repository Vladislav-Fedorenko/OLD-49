import React from 'react';

import {Progressbar} from '../components/progressbar/Progressbar';

import './style.css';

export const Layout = (props) => {
  return (
    <div className="layout">
      <Progressbar />
      <main className="layout__content">
        {props.children}
      </main>
    </div>
  );
}