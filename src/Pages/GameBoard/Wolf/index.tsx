import React, { useState, useMemo, useEffect, useRef } from "react";

import { cn } from "@bem-react/classname";
import wolfimg from "assets/img/wolf.png";
import { GenericGame } from "Components/organisms/GenericGame";
import "./wolfgame.scss";
import { PreWolfGame } from "./preGames";
import { Alert, Progress } from "antd";
import house from "assets/img/house.png";

const cN = cn("wolf-game");
type WolfGameStage = {
  timeout: number;
  size: number;
  filename: string;
  rightExtention: string;
  wrongExtentions: string[];
  rightCount?: number;
};

const shuffle = (array: Array<any>) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const stages = [
  {
    size: 3,
    filename: "song",
    rightExtention: "mp3",
    wrongExtentions: ["exe", "pdf", "jpeg", "rar"],
    timeout: 5000,
  },
  {
    size: 4,
    filename: "song",
    rightExtention: "mp3",
    wrongExtentions: ["exe", "pdf", "rar", "apk"],
    timeout: 5000,
  },
  {
    size: 5,
    filename: "song",
    rightExtention: "mp3",
    wrongExtentions: ["exe"],
    timeout: 5000,
  },
  {
    size: 5,
    filename: "song",
    rightExtention: "mp3",
    wrongExtentions: ["exe"],
    rightCount: 24,
    timeout: 5000,
  },
] as WolfGameStage[];

export const WolfGame: React.FC = () => {
  const [level, setLevel] = useState(0);
  const [errorCount, setErorCount] = useState(0);
  const [alertText, setAlertText] = useState("");
  const [isError, setIsError] = useState(true);
  const [gameEnded, setGameEnded] = useState(false);

  const [timeLeft, settimeLeft] = useState(0);

  const stage: WolfGameStage | undefined = stages[level];
  const getName = (extention: string) =>
    `${stage?.filename || ""}.${extention}`;
  const length = stage?.size ** 2 || 0;
  const showAlert = (err: boolean, text: string) => {
    setAlertText(text);
    setIsError(err);
    setTimeout(() => {
      setAlertText("");
    }, 600);
  };

  useEffect(() => {
    settimeLeft(stage?.timeout || 0);
    let localTime = stage?.timeout;

    const action = () => {
      settimeLeft(localTime - 20);
      if (localTime < 0) {
        showAlert(true, "Время вышло");
        setErorCount(errorCount + 1);
        clearInterval(interval);
      }
      localTime -= 20;
    };
    const interval = setInterval(action, 1000 / 60);
    return () => {
      clearInterval(interval);
    };
  }, [level, errorCount]);

  const answers = useMemo(() => {
    const newAnswers: string[] = [];
    for (let i = 0; i < (stage?.rightCount ?? 1); i++) {
      newAnswers.push(getName(stage?.rightExtention || ""));
    }
    const wrongCount = length - newAnswers.length;
    for (let i = 0; i < wrongCount; i++) {
      newAnswers.push(
        getName(stage.wrongExtentions[i % stage.wrongExtentions.length])
      );
    }
    shuffle(newAnswers);
    return newAnswers;
  }, [level, errorCount]);

  if (!stage) {
    return (
      <div>
        <div>Конец</div>
        <img src={house} />
      </div>
    );
  }

  const iter = [...new Array(stage.size)];

  const onClick = (right: boolean) => {
    setErorCount(errorCount + (right ? 0 : 1));

    if (right) {
      setLevel(level + 1);
    }
    showAlert(right, right ? "Верно!" : "Неправильно!");
  };
  return (
    <GenericGame
      enemyImg={wolfimg}
      enemyName="Волк"
      dialogue={[
        {
          text: "Колобок, колобок! Я тебя съем!",
          who: "enemy",
        },
        {
          text:
            "Не ешь меня, Серый Волк! Я тебе песенку спою! Сейчас только скачаю.",
          who: "kolobok",
        },
        {
          text: "Ну давай, я давно новинок не слышал.",
          who: "enemy",
        },
      ]}
      preGameScreen={PreWolfGame}
    >
      <div className={cN("score")}>
        <div className={cN("score-text")}>
          <div className={cN("score-level")}>Уровень: {level + 1}</div>
          <div className={cN("score-errors")}>Ошибок: {errorCount}</div>
        </div>
        <Progress
          type="circle"
          percent={Math.floor((100 * timeLeft) / stage?.timeout)}
          format={() => ""}
        />
      </div>

      <div className={cN("error-wrapper")}>
        {alertText && (
          <Alert message={alertText} type={isError ? "error" : "success"} />
        )}
      </div>

      <table className={cN("table")}>
        <tbody>
          {iter.map((_, x) => (
            <tr key={x}>
              {iter.map((_, y) => (
                <td
                  className={cN("cell")}
                  key={y}
                  onClick={() => {
                    onClick(
                      answers[x * stage.size + y] ===
                        `${stage?.filename || ""}.${
                          stage?.rightExtention || ""
                        }`
                    );
                  }}
                >
                  {answers[x * (stage?.size ?? 0) + y]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </GenericGame>
  );
};
