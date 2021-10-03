import React, {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';

import {BackgroundImage} from '../../components/backgroundimage/BackgroundImage';
import {Button} from '../../components/button/Button';
import {AlkoImage} from '../../components/alkoimage/AlkoImage';

import { AppContext } from '../../layout/context/Context';

import background from '../../assets/img/flat.jpg';

import './style.scss';

export const Flat = () => {
  const {setGameOverReason} = useContext(AppContext);
  const [isOrder, setIsOrder] = useState(false);
  const [wasOrder, setWasOrder] = useState(false);
  const history = useHistory();

  const goSleepHandler = () => {
    if (wasOrder) {
      history.push("/happy-end");
    } else {
      setGameOverReason("You threw up because you didn't eat anything");
      history.push("/game-over");
    }
  };

  const eatSomethingHandler = () => {
    setIsOrder(true);
  };

  const orderHandler = (isRightOrder) => {
    if (isRightOrder) {
      setWasOrder(true);
      setIsOrder(false);
    } else {
      setGameOverReason("Don't you respect our sponsor?");
      history.push("/game-over");
    }
  };

  const textColor = "#0fa";
  return (
    <AlkoImage>
      <div className="flat-page">
        <BackgroundImage src={background} />
        {
          isOrder
            ? (
              <div className="flat-page__order">
                <div>
                  <AlkoImage>
                    <Button text="Choose order way" className="flat-page__button flat-page__button_title" textColor={textColor} onClick={() => {}}/>
                  </AlkoImage>
                </div>
                <div className="flat-page__buttons">
                  <AlkoImage>
                    <Button text="Delivery club" className="flat-page__button" textColor={textColor} onClick={() => orderHandler(false)}/>
                  </AlkoImage>
                  <AlkoImage>
                    <Button text="Domka" className="flat-page__button" textColor={textColor} onClick={() => orderHandler(true)}/>
                  </AlkoImage>
                </div>
              </div>
            )
            : (
              <div className="flat-page__default">
                <AlkoImage>
                  <Button text="Go sleep" className="flat-page__button" textColor={textColor} onClick={goSleepHandler}/>
                </AlkoImage>
                {
                  wasOrder
                    ? null
                    : <AlkoImage>
                      <Button text="Eat something" className="flat-page__button" textColor={textColor} onClick={eatSomethingHandler}/>
                    </AlkoImage>
                }
              </div>
            )
        }
      </div>
    </AlkoImage>
  );
};
