import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { AppContext } from "../../layout/context/Context";
import { r } from "../../utils/random";

import "./Sleep.scss";

const DEFAULT_K = 0.95;

export const Sleep = () => {
  const [isSleeping, setIsSleeping] = useState(false);
  const { setProgressbarValue, gameOver } = useContext(AppContext);

  const [k, setK] = useState(DEFAULT_K);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  useInterval(() => {
    if (isSleeping) {
      setProgressbarValue((value) => value * k * k);
    }
  }, 200);

  const sleep = () => {
    if (!isSleeping) {
      setIsSleeping(true);
      setTimeout(() => {
        setK(1.5);
      }, r({ b: 3500 }));
    }
  };

  const wakeUp = () => {
    setIsSleeping(false);
    setK(DEFAULT_K);
  };

  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      sleep();
    }
  };

  const handleKeyUp = (e) => {
    if (e.code === "Space") {
      wakeUp();
    }
  };

  if (gameOver) {
    return null;
  }

  return <div className={classNames("sleep", { active: isSleeping })}></div>;
};
