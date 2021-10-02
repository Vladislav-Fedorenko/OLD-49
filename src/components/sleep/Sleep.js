import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { AppContext } from "../../layout/context/Context";

import "./Sleep.scss";

export const Sleep = () => {
  const [isSleeping, setIsSleeping] = useState(false);
  const { setProgressbarValue, gameOver } = useContext(AppContext);

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
      setProgressbarValue((value) => value * 1.08);
    }
  }, 200);

  const sleep = () => {
    !isSleeping && setIsSleeping(true);
  };

  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      sleep();
    }
  };

  const handleKeyUp = (e) => {
    if (e.code === "Space") {
      setIsSleeping(false);
    }
  };

  if (gameOver) {
    return null;
  }

  return <div className={classNames("sleep", { active: isSleeping })}></div>;
};
