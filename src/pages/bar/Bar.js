import React, {useContext} from "react";
import {useHistory} from 'react-router-dom';

import long from '../../assets/img/long1.png'
import background from '../../assets/img/bar.jpg'

import "./style.scss";
import {Button} from '../../components/button/Button';
import {AppContext} from '../../layout/context/Context';
import {AlkoImage} from '../../components/alkoimage/AlkoImage';
import {BackgroundImage} from '../../components/backgroundimage/BackgroundImage';

export const Bar = () => {
  const history = useHistory();
  const {progressbarValue, setProgressbarValue} = useContext(AppContext);
  const setValue = () => setProgressbarValue(progressbarValue + 20);
  return (
    <AlkoImage>
      <div className="bar-page">
        <BackgroundImage src={background} />
        <img src={long} className="bar-page__cocktail" alt="Long Iceland" />
        <div>
          <Button text={progressbarValue ? "Drink more" : "Drink"} className="bar-page__button" textColor="#f5f94b" onClick={setValue} />
          <Button text="Go Dance" className="bar-page__button" textColor="#0fa" onClick={() => history.push("/dance")} />
        </div>
      </div>
    </AlkoImage>
  );
};
