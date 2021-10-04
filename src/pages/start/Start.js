import React, {useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from '../../layout/context/Context';
import audio from '../../assets/audio/psychomecka.ogg';
import {Button} from '../../components/button/Button';
import {sendFeedback} from '../../utils/feedback';

import './style.scss';

export const Start = () => {
  const history = useHistory();
  const {setAudioTrack, reset} = useContext(AppContext);
  useEffect(() => {
    Promise.all([reset(), setAudioTrack(audio)])
  }, []);
  return (
    <div className="start-page">
      <Button text="Start" className="start-button" textColor="#0fa" onClick={() => history.push("/bar")} />
      <Button text="Send Feedback" className="start-page__feedback-button" buttonStyle="outlined" textColor="#008957" onClick={sendFeedback} />
    </div>
  );
};
