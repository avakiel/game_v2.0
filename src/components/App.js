import React from "react";
import GameBoard from "./GameBoard/GameBoard";
import { GameSettings } from "./GameSetup/GameSettings/GameSettings";
import { Player } from "./GameSetup/Player/Player";
import { HallOfFame } from "./HallOfFame/HallOfFame";
import Stats from "./Stats/Stats";


export const App = (props) => {
  
  return ( 
        <div className='app'>
        <div className="gridPlayer">
          <Player />
          </div>
        <div className="gridGameSettings">
          <GameSettings />
        </div>
        <div className='gridStats'>
          <Stats />
        </div>
        <div className='gridHallOfFame'>
          <HallOfFame />
        </div>
        <div className='gridGameBoard'>
          <GameBoard />
        </div>
      </div>
  );
};
