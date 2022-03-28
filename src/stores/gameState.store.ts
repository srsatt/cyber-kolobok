import { observable } from "mobx";

export class GameState {
  @observable
  helpKolobok = true;

  @observable
  runaway = true;

  @observable
  tracking = true;

  @observable
  feelsGood = false;

  @observable
  hungry = true;

  @observable
  adblock = false;
}

export const gameState = new GameState();
