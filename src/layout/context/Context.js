import React, {useState} from 'react';

export const AppContext = React.createContext(null);

export const Context = ({ children }) => {
  const [progressbarValue, setProgressbarValue] = useState(50);
  const [audioTrack, setAudioTrack] = useState(null);
  const contextValue = {
    progressbarValue,
    setProgressbarValue,
    audioTrack,
    setAudioTrack,
  };
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
    );
};
