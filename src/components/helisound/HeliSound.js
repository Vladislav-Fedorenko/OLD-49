import React, { useContext, useMemo } from "react";
import ReactAudioPlayer from "react-audio-player";

import { AppContext } from "../../layout/context/Context";
import heliSound from "../../assets/audio/heli.ogg";

export const HeliSound = () => {
  const { progressbarValue } = useContext(AppContext);

  const v = (progressbarValue > 100 ? 100 : progressbarValue) / 100;

  return useMemo(
    () => (
      <ReactAudioPlayer
        src={heliSound}
        autoPlay={true}
        controls={false}
        loop={true}
        volume={v * v}
      />
    ),
    [v]
  );
};
