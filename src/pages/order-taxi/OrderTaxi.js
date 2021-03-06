import React, {useContext, useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';

import background from '../../assets/img/kamergerskiy.jpg'
import phone from '../../assets/img/phone.png'
import phoneRotate from '../../assets/img/phone-rotate.png'

import "./style.scss";
import {Button} from '../../components/button/Button';
import {AlkoImage} from '../../components/alkoimage/AlkoImage';
import {BackgroundImage} from '../../components/backgroundimage/BackgroundImage';
import {AppContext} from '../../layout/context/Context';
import audio from '../../assets/audio/psychomecka.ogg';
import {r} from '../../utils/random';

export const OrderTaxi = () => {
  const {progressbarValue, setAudioTrack} = useContext(AppContext);
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
  useEffect(() => {
    setAudioTrack(audio)
  }, []);

  const onMouseOver = (e) => {
    if (!progressbarValue) return;
    const left = r({b: 1400}) - 700;
    const bottom = r({b: 700});
    setTimeout(() =>setButtonPosition({
      left,
      bottom,
    }), 150)
  }

  const order = () => history.push("/choose-taxi")

  return (
    <AlkoImage>
      <BackgroundImage src={background} style={{ zIndex: 0 }} />
      <div>
        <div className="order-taxi-page">
          <div className="order-taxi-page__phone-container">
            <img src={isDrunk ? phoneRotate : phone} className="order-taxi-page__phone" alt="phone" />
            <Button
              className={`order-taxi-page__button ${isDrunk && "order-taxi-page__button--rotate"}`}
              text="Order taxi"
              textStyle=""
              onClick={order}
              rest={{
                style: {
                  ...buttonPosition,
                  background: "#28252b"
                },
                onMouseOver,
              }}
            />
          </div>
        </div>
      </div>
    </AlkoImage>
  );
};
