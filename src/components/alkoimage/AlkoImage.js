import { useMemo } from "react";
import "./AlkoImage.scss";

const SHAKE = 10;
const BLUR = 5;
const DEFAULT_INTENSITY = 1;

const getCssProps = (intensity) => {
  const r = Math.floor(-5 + Math.random() * 10);
  const shake = intensity * SHAKE * r;
  const blur = intensity * BLUR;

  const cssProps = {
    "--shake": `${shake}px`,
    "--blur": `${blur}px`,
  };

  return cssProps;
};

export const AlkoImage = ({ intensity = DEFAULT_INTENSITY, children }) => {
  const cssProps = useMemo(() => getCssProps(intensity), [intensity]);

  return (
    <div className="alko-image" style={cssProps}>
      {children}
    </div>
  );
};
