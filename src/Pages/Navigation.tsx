import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "utils/hooks/useStores";
import { NavigationStages, NavigationMiniGames } from "interfaces/navigation";
import { WelcomePage } from "./WelcomePage";
import { TermsOfService } from "./TermsOfService";
import { GameBoard } from "./GameBoard";
import { EndGame } from "./EndGame";
import { Locker } from "./Locker";
import { WolfGame } from "./GameBoard/Wolf";

export const Navigation: React.FC = observer(() => {
  const { navigationStore } = useStores();

  switch (navigationStore.stage) {
    case NavigationStages.welcome:
      return <WelcomePage />;
    case NavigationStages.terms:
      return <TermsOfService />;
    case NavigationStages.board:
      return <BoardNavigator />;
    case NavigationStages.endgame:
      return <EndGame />;
    case NavigationStages.locker:
      return <Locker />;
  }
});

const BoardNavigator: React.FC = observer(() => {
  const { navigationStore } = useStores();
  switch (navigationStore.boss) {
    case null:
      return <GameBoard />;
    case NavigationMiniGames.wolf:
      return <WolfGame />;
  }
  return null;
});
