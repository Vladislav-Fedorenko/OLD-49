import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {AlkoImage} from '../../components/alkoimage/AlkoImage';

import { AppContext } from '../../layout/context/Context';
import {Button} from '../../components/button/Button';

import background from '../../assets/img/choose_taxi.jpg';
import './style.scss';

export const ChooseTaxi = () => {
  const history = useHistory();
  const {setGameOverReason} = useContext(AppContext);

  const availableTaxi = [
    {number: '252', target: 'Chekoldan'},
    {number: '291', target: 'Port Artur'},
    {number: '917', target: 'Stariy Kirovsk'},
    {number: '593', target: 'Lukyanovka'},
    {number: '463', target: 'Rabochie'},
    {number: '062', target: 'Amur'},
  ];
  const currentTaxi = availableTaxi[Math.floor(Math.random() * 100) % availableTaxi.length];

  const chooseTaxiHandler = (taxi) => {
    if (taxi.number === currentTaxi.number) {
      history.push("/taxi");
    } else {
      setGameOverReason(`You chose not your taxi and landed in ${taxi.target}`);
      history.push("/game-over");
    }
  };

  const textColor = '#0fa';
  return (
    <AlkoImage>
      <div className="choose-taxi-page">
        <img className="choose-taxi-page__img" src={background} alt="choose taxi"/>
        <Button
          text={`Driver ${currentTaxi.number} is here`}
          className="choose-taxi__info-button"
          textColor={textColor}
          onClick={() => {}}
        />
        {availableTaxi.map(taxi =>
          <div className={`choose-taxi__go-container choose-taxi__go-container_${taxi.number}`}>
            <AlkoImage>
            <Button text="Go!"
                    textColor={textColor}
                    className="choose-taxi__go-button"
                    onClick={() => chooseTaxiHandler(taxi)}
            />
          </AlkoImage>
          </div>
        )}
      </div>
    </AlkoImage>
  );
};
