import React from "react";

import "./style.scss";
import { AlkoImage } from "../../components/alkoimage/AlkoImage";
import { Link } from "react-router-dom";

export const Start = () => {
  return (
    <div className="start-page">
      <AlkoImage>
        <Link to="/bar">Start</Link>
      </AlkoImage>
    </div>
  );
};
