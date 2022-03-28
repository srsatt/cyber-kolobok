import { observable } from "mobx";
import { NavigationStages, NavigationMiniGames } from "interfaces/navigation";

export class NavigationStore {
  @observable
  stage = NavigationStages.welcome;

  @observable
  password = "";

  @observable
  boss: NavigationMiniGames | null = NavigationMiniGames.wolf;
}

export const navigationStore = new NavigationStore();
