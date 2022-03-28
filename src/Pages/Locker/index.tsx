import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { cn } from "@bem-react/classname";
import "./locker.scss";
import { Input, Button, Alert } from "antd";
import { useStores } from "utils/hooks/useStores";
import { NavigationStages } from "interfaces/navigation";
import { Result } from "./checker.js";
const cN = cn("locker");
export const Locker: React.FC = observer(() => {
  const { navigationStore } = useStores();
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [res, setRes] = useState<any>(null);

  const submit = () => {
    if (password1 !== password2) {
      setError("Пароли не совпадают");
      return;
    }

    let result = new Result(password1);

    result.make_decision();
    console.log(result);
    setRes(result);
  };

  const next = () => {
    navigationStore.stage = NavigationStages.board;
    navigationStore.password = password1;
  };
  return (
    <div className={cN("wrapper")}>
      {res ? (
        <>
          <div className={cN("text")}>{res.hack_description}</div>
          <div className={cN("text")}>
            {res.bad_props.map((prop) => (
              <div className={cN("text")} key={prop}>
                {prop}
              </div>
            ))}
          </div>
          <Button type="primary" onClick={next}>
            Понятно
          </Button>
        </>
      ) : (
        <>
          <div className={cN("text")}>
            Колобок от дедушки ушел от бабушки ушел и родной амбар на замок
            закрыл!
          </div>
          <div className={cN("text")}>
            Задайте пароль для амбарного замка, чтобы уйти в интернет.
          </div>
          <Input
            type="password"
            value={password1}
            onChange={(e) => {
              setPassword1(e.target.value);
              setError("");
            }}
          />
          <div className={cN("text")}>Подтвердите пароль</div>
          <Input
            type="password"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
              setError("");
            }}
          />

          <Button type="primary" onClick={submit}>
            Запереть замок
          </Button>
          {error && (
            <Alert message="Error" description={error} type="error" showIcon />
          )}
        </>
      )}
    </div>
  );
});
