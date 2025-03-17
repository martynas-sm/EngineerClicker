import React, { useSyncExternalStore } from "react";
import styles from "./RightSection.module.css";
import ButtonCanvas from "../ButtonCanvas";
import game from "../../game/Game";

const RightSection = () => {
  const euros = useSyncExternalStore(
    game.subscribe.bind(game),
    () => game.resourceManager.euro
  );

  const handleClick = () => {
    game.resourceManager.addEuros(1);
  };

  return (
    <div className={styles.rightSection} style={{ padding: "8px" }}>
      <ButtonCanvas onClick={handleClick} />
    </div>
  );
};

export default RightSection;
