import classNames from "classnames";
import { useEffect, useState } from "react";

import "./Sleep.scss";

export const Sleep = () => {
  const [isSleeping, setIsSleeping] = useState(false);

  const handleKeyDown = (e) => {
    // console.log("event", e);
    if (e.code === "Space") {
      !isSleeping && setIsSleeping(true);
    }
  };

  const handleKeyUp = (e) => {
    // console.log("event", e);
    if (e.code === "Space") {
      setIsSleeping(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  return <div className={classNames("sleep", { active: isSleeping })}></div>;
};
