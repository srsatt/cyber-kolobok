import React from "react";
import { DialogueLine } from "./index";

import kolobok from "assets/img/kolobok.png";
import { cn } from "@bem-react/classname";
import { DialogueText } from "../atoms/dialogue";
import { Button } from "antd";
const cN = cn("game-dialogue");

export interface DialogueProps {
  dialogue: DialogueLine[];
  enemyImg: string;
  enemy: string;
  onClose(): void;
}
export const Dialogue: React.FC<DialogueProps> = (props) => {
  return (
    <>
      <div className={cN("wrapper")}>
        <Character name="Колобок" img={kolobok} />
        <DialogueText dialogue={props.dialogue} />
        <Character name={props.enemy} img={props.enemyImg} />
      </div>
      <Button
        style={{ alignSelf: "center" }}
        type="primary"
        onClick={props.onClose}
      >
        Начать
      </Button>
    </>
  );
};

const Character: React.FC<{ name: string; img: string }> = (props) => {
  return (
    <div className={cN("character-wrapper")}>
      <img className={cN("img")} src={props.img} />
      <div className={cN("character-name")}>{props.name}</div>
    </div>
  );
};
