import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {AppContext} from '../../layout/context/Context';
import {AlkoImage} from '../../components/alkoimage/AlkoImage';
import audio from '../../assets/audio/psychomecka.ogg';

import './style.scss';

export const Start = () => {
  const {setAudioTrack} = useContext(AppContext);
  useEffect(() => setAudioTrack(audio), []);
  return (
    <div className="start-page">
      <AlkoImage>
        <Link to="/bar">Start</Link>
      </AlkoImage>
    </div>
  );
};
