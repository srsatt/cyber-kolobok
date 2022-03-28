import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Button } from "antd";
import { useStores } from "utils/hooks/useStores";
import { NavigationStages } from "interfaces/navigation";

import day from "assets/img/main.png";
import night from "assets/img/main-neon.png";

export const WelcomePage: React.FC = observer(() => {
  const { navigationStore } = useStores();

  const [isDay, setIsDay] = useState(true);
  return (
    <div className="main-wrapper">
      <img className="main-image" src={isDay ? day : night} />
      <Button
        className="main-button"
        style={{ position: "absolute" }}
        onMouseEnter={() => setIsDay(false)}
        onMouseLeave={() => setIsDay(true)}
        type="primary"
        onClick={() => (navigationStore.stage = NavigationStages.terms)}
      >
        Начать игру
      </Button>
    </div>
  );
});
