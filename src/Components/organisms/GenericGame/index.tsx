import React, { useState } from "react";
import { cn } from "@bem-react/classname";
import { Dialogue } from "./dialogue";
import "./game.scss";
import { Button } from "antd";

const cN = cn("game");

export type DialogueLine = {
  text: string;
  who: "enemy" | "kolobok";
};
export type PreGameScreenProp =
  | React.FC<{ nextStage(): void }>
  | { title: string; text: string };

export interface GenericGameProps {
  enemyImg: string;
  enemyName: string;
  dialogue: DialogueLine[];
  preGameScreen: PreGameScreenProp;
}

export const GenericGame: React.FC<GenericGameProps> = (props) => {
  const [stage, setStage] = useState(0);

  if (stage === 0) {
    return (
      <div className={cN("wrapper")}>
        <Dialogue
          dialogue={props.dialogue}
          enemy={props.enemyName}
          enemyImg={props.enemyImg}
          onClose={() => setStage(1)}
        />
      </div>
    );
  }
  if (stage === 1) {
    if ("title" in props.preGameScreen) {
      return (
        <div className={cN("pre-wrapper")}>
          <div className={cN("pre-title")}>{props.preGameScreen.title}</div>
          <div className={cN("pre-text")}>{props.preGameScreen.title}</div>
          <Button
            type="primary"
            className={cN("pre-button")}
            onClick={() => setStage(2)}
          >
            Начать
          </Button>
        </div>
      );
    } else {
      return (
        <>
          {React.createElement(props.preGameScreen, {
            nextStage: () => setStage(2),
          })}
        </>
      );
    }
  }

  if (stage === 2) {
    return <>{props.children}</>;
  }
  return null;
};
