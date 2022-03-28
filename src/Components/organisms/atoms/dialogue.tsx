import React, { useEffect } from "react";
import { DialogueLine } from "../GenericGame";
import Typewriter from "typewriter-effect/dist/core";

import { cn } from "@bem-react/classname";
import "./dialogue.scss";
const cN = cn("dialogue");

export const DialogueText: React.FC<{ dialogue: DialogueLine[] }> = (props) => {
  const drawDialogue = () => {
    const lines = props.dialogue.map((line, index) => {
      return {
        who: line.who,
        obj: new Typewriter(`#dialogue-line-${index}`, { delay: 20 }),
      };
    });

    const startLine = (idx: number) => {
      if (lines[idx]) {
        const el = document.getElementById(`dialogue-line-${idx}`);
        if (el) {
          el.style.display = "block";
        }
        lines[idx].obj
          .start()
          .typeString(props.dialogue[idx].text)
          .callFunction(() => {
            const el = document.getElementsByClassName(`Typewriter__cursor`)[0];
            if (el) {
              el.remove();
            }
            startLine(idx + 1);
          });
      }
    };
    startLine(0);
  };

  useEffect(() => {
    drawDialogue();
  }, []);
  return (
    <div className={cN("dialogue-wrapper")}>
      {props.dialogue.map(({ who }, index) => (
        <div
          key={`dialogue-line-${index}`}
          id={`dialogue-line-${index}`}
          className={cN("line", { who })}
        />
      ))}
    </div>
  );
};
