import React from "react";

import { cn } from "@bem-react/classname";
import extention1img from "assets/img/extention-1.png";
import extention2img from "assets/img/extention-2.png";

import "./wolfgame.scss";
import { Button } from "antd";
import { PreGameScreenProp } from "Components/organisms/GenericGame";

const cN = cn("wolf-game");

export const PreWolfGame: PreGameScreenProp = (props) => {
  return (
    <div className={cN("pre-game")}>
      <div className={cN("pre-game-title")}>
        Чтобы скачать песенку, нужно быть внимательным!
      </div>
      <div className={cN("pre-game-text")}>
        Часто хакеры подменяют файл, например, нужной книги{" "}
        <span className={cN("text-block", { color: "red" })}>
          (.epub, .fb2, .docx, .pdf)
        </span>
        , файлом другого типа данных - вредоносной программой, вирусом. В конце
        такого файла стоит расширение{" "}
        <span className={cN("text-block", { color: "green" })}>.ехе</span>.
        Всегда нужно понимать, какой тип файла собираешься скачать.
        <div className={cN("pre-game-imgs")}>
          <img src={extention1img} />
          <img src={extention2img} />
        </div>
      </div>
      <Button
        onClick={props.nextStage}
        type="primary"
        style={{ margin: "auto" }}
      >
        Вперед!
      </Button>
    </div>
  );
};
