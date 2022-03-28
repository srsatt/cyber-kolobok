import React from "react";
import { observer } from "mobx-react-lite";
import { Button, Checkbox } from "antd";
import { useStores } from "utils/hooks/useStores";
import { NavigationStages } from "interfaces/navigation";
import { cn } from "@bem-react/classname";
const cN = cn("tos");
export const TermsOfService: React.FC = observer(() => {
  const { navigationStore, gameState } = useStores();

  return (
    <div className={cN("wrapper")}>
      <div className={cN("scrollwrapper")}>
        <h3>
          {" "}
          Добро пожаловать в интернет! Помоги колобку пройти через Интернет и не
          быть съеденным! Пользовательское соглашение{" "}
        </h3>
        <p>1) Классическая сказка про Колобка.</p>
        <p>Жил-был старик со старухою. Просит старик:</p>
        <p>— Испеки, старуха, колобок!</p>
        <p>— Из чего печь — то? Муки нету, —отвечает ему старуха.</p>
        <p>
          — Э-эх,старуха! По коробу поскреби, по сусеку помети; авось муки и
          наберется.
        </p>
        <p>
          Взяла старуха крылышко, по коробу поскребла, по сусеку помела, и
          набралось муки пригоршни с две. Замесила на сметане, изжарила в масле
          и положила на окошечко постудить. Колобок полежал — полежал, да вдруг
          и покатился — с окна на лавку, с лавки на пол, по полу да к дверям,
          перепрыгнул через порог в сени, из сеней на крыльцо, с крыльца — на
          двор, со двора за ворота, дальше и дальше. Катится колобок по дороге,
          а навстречу ему заяц:
        </p>
        <p>— Колобок, колобок! Я тебя съем.</p>
        <p>
          — Не ешь меня, косой зайчик! Я тебе песенку спою, — сказал колобок и
          запел:
        </p>
        <div className={cN("song")}>
          <p>Я Колобок, Колобок!</p>
          <p>Я по коробу скребен,</p>
          <p>По сусеку метен,</p>
          <p>На сметане мешон,</p>
          <p>Да в масле пряжон,</p>
          <p>На окошке стужон;</p>
          <p>Я от дедушки ушел,</p>
          <p>Я от бабушки ушел,</p>
          <p>И от тебя, зайца, не хитро уйти!</p>
        </div>
        <p>
          И покатился себе дальше; только заяц его и видел! Катится колобок, а
          навстречу ему волк:
        </p>
        <p>— Колобок, колобок! Я тебя съем!</p>
        <p>
          — Не ешь меня, серый волк! Я тебе песенку спою, — сказал колобок и
          запел:
        </p>
        <div className={cN("song")}>
          <p>Я Колобок, Колобок!</p>
          <p>Я по коробу скребен,</p>
          <p>По сусеку метен,</p>
          <p>На сметане мешон,</p>
          <p>Да в масле пряжон,</p>
          <p>На окошке стужон;</p>
          <p>Я от дедушки ушел,</p>
          <p>Я от бабушки ушел,</p>
          <p>Я от зайца ушел,</p>
          <p>И от тебя, волка, не хитро уйти!</p>
        </div>
        <p>
          И покатился себе дальше; только волк его и видел! Катится колобок, а
          навстречу ему медведь:
        </p>
        <p>— Колобок, колобок! Я тебя съем.</p>
        <p>
          — Не ешь меня, косолапый! Я тебе песенку спою, — сказал колобок и
          запел:
        </p>
        <div className={cN("song")}>
          <p>Я Колобок, Колобок!</p>
          <p>Я по коробу скребен,</p>
          <p>По сусеку метен,</p>
          <p>На сметане мешон,</p>
          <p>Да в масле пряжон,</p>
          <p>На окошке стужон;</p>
          <p>Я от дедушки ушел,</p>
          <p>Я от бабушки ушел,</p>
          <p>Я от зайца ушел,</p>
          <p>Я от волка ушел,</p>
          <p>И от тебя, медведь, не хитро уйти!</p>
        </div>
        <p>
          И опять укатился, только медведь его и видел! Катится, катится
          «колобок, а навстречу ему лиса:
        </p>
        <p>
          — Здравствуй, колобок! Какой ты хорошенький. Колобок, колобок! Я тебя
          съем.
        </p>
        <p>
          — Не ешь меня, лиса! Я тебе песенку спою, — сказал колобок и запел:
        </p>
        <div className={cN("song")}>
          <p>Я Колобок, Колобок!</p>
          <p>Я по коробу скребен,</p>
          <p>По сусеку метен,</p>
          <p>На сметане мешон,</p>
          <p>Да в масле пряжон,</p>
          <p>На окошке стужон;</p>
          <p>Я от дедушки ушел,</p>
          <p>Я от бабушки ушел,</p>
          <p>Я от зайца ушел,</p>
          <p>Я от волка ушел,</p>
          <p>Я от медведя ушел,</p>
          <p>А от тебя, лиса, и подавно уйду!</p>
        </div>
        <p>
          — Какая славная песенка! — сказала лиса. — Но ведь я, колобок, стара
          стала, плохо слышу; сядь-ка на мою мордочку да пропой еще разок
          погромче.
        </p>
        <p>Колобок вскочил лисе на мордочку и запел ту же песню.</p>
        <p>
          — Спасибо, колобок! Славная песенка, еще бы послушала! Сядь-ка на мой
          язычок да пропой в последний разок, — сказала лиса и высунула свой
          язык; колобок прыг ей на язык, а лиса — ам его! И съела колобка...
        </p>
        <p>
          2) Чтобы Колобка не съели также, как это произошло в сказке, нужно
          выполнить ряд сложных заданий!
        </p>
        <p>Давай подготовимся к ним. Я соглашаюсь:</p>
        <div className={cN("checkboxes")}>
          <Checkbox
            checked={gameState.helpKolobok}
            onChange={() => (gameState.helpKolobok = !gameState.helpKolobok)}
          >
            Помочь колобку.
          </Checkbox>
          <Checkbox
            checked={gameState.runaway}
            onChange={() => {
              gameState.runaway = !gameState.runaway;
            }}
          >
            С тем, что колобок от дедушки и от бабушки ушел и попал в интернет.
          </Checkbox>
          <Checkbox
            checked={gameState.tracking}
            onChange={() => (gameState.tracking = !gameState.tracking)}
          >
            Уведомлять о всех своих перемещениях Лису, Волка и Медведя.
          </Checkbox>
          <Checkbox
            checked={gameState.feelsGood}
            onChange={() => (gameState.feelsGood = !gameState.feelsGood)}
          >
            В начале игры у Колобка румяные щечки.
          </Checkbox>
          <Checkbox
            checked={gameState.hungry}
            onChange={() => (gameState.hungry = !gameState.hungry)}
          >
            В начале игры в Колобке в два раза меньше теста.
          </Checkbox>
          <Checkbox
            checked={gameState.adblock}
            onChange={() => (gameState.adblock = !gameState.adblock)}
          >
            У колобка есть зонтик для защиты от спама в Интернете.
          </Checkbox>
        </div>
      </div>
      <div className={cN("footer")}>
        <p className={cN("footer-text")}>
          Нажимая кнопку "Начать приключения" Вы соглашаетесь с правилами игры,
          политикой конфиденциальности сказочного королевства и осознаете, что
          Ваше согласие с начальными установками повлияет на ход игры.
        </p>
        <Button
          type="primary"
          onClick={() => (navigationStore.stage = NavigationStages.locker)}
        >
          Начать приключения
        </Button>
      </div>
    </div>
  );
});