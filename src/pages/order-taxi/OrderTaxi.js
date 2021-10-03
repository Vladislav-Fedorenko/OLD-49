import React, {useContext, useState} from "react";
import {useHistory} from 'react-router-dom';

import background from '../../assets/img/kamergerskiy.jpg'
import phone from '../../assets/img/phone.png'
import phoneRotate from '../../assets/img/phone-rotate.png'

import "./style.scss";
import {Button} from '../../components/button/Button';
import {AlkoImage} from '../../components/alkoimage/AlkoImage';
import {BackgroundImage} from '../../components/backgroundimage/BackgroundImage';
import {AppContext} from '../../layout/context/Context';

export const OrderTaxi = () => {
  const {progressbarValue} = useContext(AppContext);
  const isDrunk = progressbarValue > 50;
  const INIT_POSITION = isDrunk ? {
    bottom: 510,
    left: 95,
  } : {
    bottom: 99,
    left: 92,
  };
  const [buttonPosition, setButtonPosition] = useState(INIT_POSITION)
  const history = useHistory();
  const onMouseOver = (e) => {
    if (!progressbarValue) return;
    const x = e.pageX;
    const y = e.pageY;
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    setButtonPosition({
      bottom: pageWidth - x + 10,
      left: pageHeight - y + 10,
    })
  }
  const order = () => history.push("/choose-taxi")
  return (
    <>
      <BackgroundImage src={background} style={{ zIndex: 0 }} />
      <AlkoImage>
        <div className="order-taxi-page">
          <div className="order-taxi-page__phone-container">
            <img src={isDrunk ? phoneRotate : phone} className="order-taxi-page__phone" alt="phone" />
            <Button
              className={`order-taxi-page__button ${isDrunk && "order-taxi-page__button--rotate"}`}
              text="Order taxi"
              textStyle=""
              onClick={order}
              rest={{
                style: buttonPosition,
                onMouseOver,
              }}
            />
          </div>
        </div>
      </AlkoImage>
    </>
  );
};
