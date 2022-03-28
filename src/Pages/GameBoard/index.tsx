import React, { useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { cn } from "@bem-react/classname";
import { Button } from "antd";
import { useStores } from "utils/hooks/useStores";
import { NavigationStages } from "interfaces/navigation";

import "./board.scss";
const cN = cn("board");
const boardWidht = 1200;
const boardHeight = 800;
const boardPadding = 0;
const lineWidth = 2;
const cellSise = 50;

export const GameBoard: React.FC = observer(() => {
  const { navigationStore } = useStores();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawCanvas = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.lineJoin = "round";
      ctx.globalCompositeOperation = "lighter";
      ctx.lineWidth = lineWidth;
      for (let x = 0; x <= boardWidht; x += cellSise) {
        ctx.moveTo(lineWidth + x + boardPadding, boardPadding);
        ctx.lineTo(lineWidth + x + boardPadding, boardHeight + boardPadding);
      }

      for (let x = 0; x <= boardHeight; x += cellSise) {
        ctx.moveTo(boardPadding, lineWidth + x + boardPadding);
        ctx.lineTo(boardWidht + boardPadding, lineWidth + x + boardPadding);
      }
      ctx.strokeStyle = "blue";
      ctx.stroke();
    }
  };
  useEffect(() => {
    drawCanvas();
  }, []);
  return (
    <div>
      <div className={cN("board-wrapper")}>
        <canvas
          ref={canvasRef}
          id="canvas"
          width={`${boardWidht}px`}
          height={`${boardHeight}px`}
          style={{ background: "#000000", margin: "20px" }}
        />
      </div>
      <Button
        type="primary"
        onClick={() => {
          navigationStore.stage = NavigationStages.endgame;
        }}
      >
        finish game
      </Button>
    </div>
  );
});
