import { useContext, useEffect, useMemo, useState } from "react";
import { BackgroundImage } from "../../components/backgroundimage/BackgroundImage";
import { AppContext } from "../../layout/context/Context";
import { Button } from "../../components/button/Button";
import background from "../../assets/img/inside_taxi3.jpg";

import "./style.scss";
import { r } from "../../utils/random";
import { useInterval } from "../../hooks/useInterval";
import { useHistory } from "react-router";
import { AlkoImage } from "../../components/alkoimage/AlkoImage";

const DECREASE = 0.7;
const INCREASE = 10;
const COUNT = 5;

export const Taxi = () => {
  const { progressbarValue, setProgressbarValue } = useContext(AppContext);
  const [focusPosition, setFocusPosition] = useState(undefined);
  const [count, setCount] = useState(0);
  const history = useHistory();

  // const [focusing, setFocusing] = useState(false);

  const onMouseOver = () => {
    if (focusPosition) {
      hideFocus();
    }
  };

  const hideFocus = () => {
    setFocusPosition(undefined);
    setProgressbarValue((value) => value * DECREASE);
    setCount((count) => count + 1);
    displayFocus();
  };

  const displayFocus = () => {
    if (count < COUNT) {
      setTimeout(() => {
        setFocusPosition({
          top: `${-r({ a: 100, b: window.innerHeight - 200 })}px`,
          left: `${r({ a: 100, b: window.innerWidth - 200 })}px`,
        });
      }, r({ a: 500, b: 1000 }));
    }
  };

  useEffect(() => {
    displayFocus();
  }, []);

  useEffect(() => {
    if (count >= COUNT) {
      history.push("/flat");
      // console.log("go to flat");
    }
  }, [count]);

  useInterval(() => {
    if (focusPosition) {
      setProgressbarValue((value) => value + INCREASE);
    }
  }, 500);

  console.log("pos", focusPosition);

  const button = useMemo(
    () => (
      <AlkoImage intensity={100}>
        {focusPosition && (
          <Button
            className="focus-button"
            text=" "
            textColor="#0fa"
            rest={{
              style: { ...focusPosition },
              onMouseOver,
            }}
          />
        )}
      </AlkoImage>
    ),
    [focusPosition]
  );

  return useMemo(
    () => (
      <div className="taxi-page-container">
        {/* <BackgroundImage src={background} style={{ zIndex: 0 }} /> */}

        <AlkoImage>
          <BackgroundImage src={background} style={{ zIndex: 0 }} />
        </AlkoImage>

        <Button
          className="tip-button"
          text="You have to focus"
          textColor="#aa1a6f"
        />

        {/* <AlkoImage intensity={focusing ? 0 : 100}> */}
        {button}
      </div>
    ),
    [progressbarValue, focusPosition]
  );
};
