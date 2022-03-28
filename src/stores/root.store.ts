import { navigationStore } from "./navigation.store";
import { gameState } from "./gameState.store";

export const RootStore = {
  navigationStore,
  gameState,
};

export type RootStoreModel = typeof RootStore;
