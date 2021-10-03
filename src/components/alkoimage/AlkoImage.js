import { useContext, useMemo, useState } from "react";
import "./AlkoImage.scss";
import { AppContext } from "../../layout/context/Context";
import { r } from "../../utils/random";
import { useInterval } from "../../hooks/useInterval";

const SHAKE = 25;
const BLUR = 5;
const ROTATE = 25;

const normIntensity = (int) => {
  if (int > 100) {
    return 1;
  }
  return int / 100;
};

const getCssProps = (intensity) => {
  const k = 1 + intensity / 100;
  const shakeX = r({ a: -SHAKE }) * k;
  const shakeY = r({ a: -SHAKE }) * k;

  const blur = BLUR * k;

  const cssProps = {
    "--shake-x": `${shakeX}px`,
    "--shake-y": `${shakeY}px`,
    "--blur": `${blur}px`,
  };

  return cssProps;
};

// const f = (intensity) => {
//   const n = normIntensity(intensity);

//   console.log("N", n);

//   return {
//     // opacity: `${1 - n}`,
//     // opacity: `${n}`,
//     transform: `rotate(${r({ a: -ROTATE, b: 2 * ROTATE }) * n}deg)`,
//   };
// };

export const AlkoImage = ({ intensity = null, children }) => {
  const { progressbarValue } = useContext(AppContext);
  const [cssProps, setCssProps] = useState({});
  // const [cssCopyProps, setCssCopyProps] = useState({});

  useInterval(() => {
    setCssProps(getCssProps(intensity || progressbarValue));
  }, 300);

  // useInterval(() => {
  //   setCssCopyProps(f(intensity || progressbarValue));
  // }, 1000);

  return (
    <div className="alko-image" style={cssProps}>
      {children}

      {/* <div className="alko-image-copy" style={cssCopyProps}>
        {children}
      </div> */}
    </div>
  );
};
