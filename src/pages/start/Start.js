import React, {useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from '../../layout/context/Context';
import audio from '../../assets/audio/psychomecka.ogg';
import {Button} from '../../components/button/Button';

import './style.scss';

export const Start = () => {
  const history = useHistory();
  const {setAudioTrack} = useContext(AppContext);
  useEffect(() => setAudioTrack(audio), []);
  return (
    <div className="start-page">
      <Button text="Start" className="start-button" textColor="#0fa" onClick={() => history.push("/bar")} />
    </div>
  );
};
