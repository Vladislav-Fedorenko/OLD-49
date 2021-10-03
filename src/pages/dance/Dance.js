import React, {useContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from '../../layout/context/Context';
import audio from '../../assets/audio/dance.ogg';
import party1 from '../../assets/img/party.gif';
import party2 from '../../assets/img/party2.gif';
import party3 from '../../assets/img/party3.gif';
import party4 from '../../assets/img/party4.gif';

import './style.scss';
import background from '../../assets/img/bar.jpg';
import {BackgroundImage} from '../../components/backgroundimage/BackgroundImage';
import {AlkoImage} from '../../components/alkoimage/AlkoImage';

export const Dance = () => {
  const [displayGif1, setDisplayGif1] = useState(false);
  const [displayGif2, setDisplayGif2] = useState(false);
  const [displayGif3, setDisplayGif3] = useState(false);
  const [displayGif4, setDisplayGif4] = useState(false);

  const history = useHistory();
  const {setAudioTrack} = useContext(AppContext);
  useEffect(() => {
    setAudioTrack(audio);
    setTimeout(() => setDisplayGif1(true), 2000);
    setTimeout(() => setDisplayGif2(true), 4000);
    setTimeout(() => setDisplayGif3(true), 5000);
    setTimeout(() => setDisplayGif4(true), 6000);
    setTimeout(() => history.push("/order-taxi"), 11000)
  }, []);
  return (
    <AlkoImage>
      <div className="dance-page">
        <BackgroundImage src={background} />
        { displayGif1 ? <img className="dance-gif" src={party1} alt="party" /> : null }
        { displayGif2 ? <img className="dance-gif" src={party2} alt="party2"/> : null }
        { displayGif3 ? <img className="dance-gif" src={party3} alt="party3"/> : null }
        { displayGif4 ? <img className="dance-gif" src={party4} alt="party4"/> : null }
      </div>
    </AlkoImage>
  );
};
