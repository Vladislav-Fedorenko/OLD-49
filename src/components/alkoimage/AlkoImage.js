import {useContext, useMemo} from "react";
import "./AlkoImage.scss";
import {AppContext} from '../../layout/context/Context';

const SHAKE = 10;
const BLUR = 5;

const getCssProps = (intensity) => {
  const r = Math.floor(-5 + Math.random() * 10);
  const shake = intensity * SHAKE * r / 20;
  const blur = intensity * BLUR / 20;

  const cssProps = {
    "--shake": `${shake}px`,
    "--blur": `${blur}px`,
  };

  return cssProps;
};

export const AlkoImage = ({ intensity = null, children }) => {
  const {progressbarValue} = useContext(AppContext);
  const cssProps = useMemo(() => getCssProps(intensity || progressbarValue),
    [progressbarValue, intensity]);

  return (
    <div className="alko-image" style={cssProps}>
      {children}
    </div>
  );
};
