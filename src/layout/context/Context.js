import React, {useState} from 'react';

export const AppContext = React.createContext(null);

export const Context = ({ children }) => {
  const [progressbarValue, setProgressbarValue] = useState(50);
  const contextValue = {
    progressbarValue,
    setProgressbarValue,
  };
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
    );
}