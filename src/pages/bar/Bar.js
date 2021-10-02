import React, {useContext} from "react";

import long from '../../assets/img/long1.png'

import "./style.scss";
import {Button} from '../../components/button/Button';
import {AppContext} from '../../layout/context/Context';
import {AlkoImage} from '../../components/alkoimage/AlkoImage';

export const Bar = () => {
  const {progressbarValue, setProgressbarValue} = useContext(AppContext);
  const setValue = () => setProgressbarValue(progressbarValue + 20);
  return (
    <AlkoImage>
      <div className="bar-page">
        <img src={long} className="bar-page__cocktail" />
        <div>
          <Button text={progressbarValue ? "Drink more" : "Drink"} className="bar-page__button" textColor="#f5f94b" onClick={setValue} />
          <Button text="Go Dance" className="bar-page__button" textColor="#0fa" onClick={() => {}} />
        </div>
      </div>
    </AlkoImage>
  );
};
