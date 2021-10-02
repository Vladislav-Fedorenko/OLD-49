import React from 'react';
import {Link} from 'react-router-dom';

import {AppContext} from '../../layout/context/Context';
import {AlkoImage} from '../../components/AlkoImage/AlkoImage';

import audio from '../../assets/psychomecka.ogg';
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
