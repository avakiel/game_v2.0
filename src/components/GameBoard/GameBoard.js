import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushTablet} from "../../Store/FameReducer";
import {
  refreshGame,
  selectGameState,
  setFlashRandom,
} from "../../Store/GameReducer";
import { playerScore, refreshPlayer, selectPlayers } from "../../Store/PlayersReducer";
import {
  refreshSettings,
  selectSettings,
} from "../../Store/SettingsReducer";





function GameBoard(props) {
  let gameState = useSelector(selectGameState);
  let gameSettings = useSelector(selectSettings);
  let players = useSelector(selectPlayers);
  let dispatch = useDispatch();
  let settings = useSelector(selectSettings);

  const [imFlashed, setImFlashed] = useState(false);
  const [hideClass, setHideClass] = useState('')
  const [falseCounter, setFalseCounter] = useState(0)
  let falsePerRound = 0


  function startGame() {
    setHideClass('hide')
    const gameArr = getGameArray();
    // hide button !!!!!
    flashLight(gameArr);
    dispatch(setFlashRandom(gameArr));

  }

  const randomise = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  const getGameArray = () => {
    let startArrLength = settings.countValue;
    const min = 1;
    const max = 4;
    let gameArr = [];

    for (let i = 0; i < startArrLength; i++) {
      gameArr.push(randomise(min, max));
    }
    return gameArr;
  };

  function turnOffFlash(item, isFinnaly = false) {
    setTimeout(() => {
      item.classList.remove("active");
      isFinnaly === true ? setImFlashed(true) : setImFlashed(false);
    }, 1000 - gameSettings.speedValue * 10 - 200);
  }

  function flashLight(arr) {
    let flashTurn = arr;
    let flashItems = document.querySelectorAll(".flashItem");
    let gameTimeOut = 1000 - gameSettings.speedValue * 10;

    for (let i = 0; i < flashTurn.length; i++) {
      for (let k = 0; k < flashItems.length; k++) {
        if (Number(flashItems[k].id) === Number(flashTurn[i])) {
          setTimeout(
            (item) => {
              item.classList.add("active");
              if (i === flashTurn.length - 1) {
                turnOffFlash(item, true);
              } else {
                turnOffFlash(item);
              }
            },
            gameTimeOut * i,
            flashItems[k]
          );
        }
      }
    }
  }

  function totalEnd() {

    setFalseCounter(0)
    setImFlashed(false)
    setHideClass('')
    dispatch(refreshPlayer())
    dispatch(refreshSettings())
    dispatch(refreshGame())
    dispatch(
      pushTablet({
        name: players.player,
        score: players.score,
      })
    );
    alert("game over");

    playerCheck = []
    count = 0
    falsePerRound = 0
  }



  function gameEnd() {
    document
      .querySelectorAll(".flashItem")
      .forEach((item) => (item.style.backgroundColor = ""));
    setHideClass('')
    setFalseCounter(falseCounter + falsePerRound)
    dispatch(playerScore(Math.round(randomArr.length - falsePerRound)))
  }

  let randomArr = gameState.flashRandom;
  let playerCheck = [];
  let count = 0;

  function itemCheck(event) {
    playerCheck.push(Number(event.target.id));
    if (Number(event.target.id) === randomArr[count]) {
      count++;
      checkCorrect(event);
    } else if (Number(event.target.id) !== randomArr[count]) {
      checkWrong(event);
      count++;
    }
    if (playerCheck.length === randomArr.length) {
      count = 0;
      playerCheck = [];
      setTimeout(gameEnd, 1000);
      setImFlashed(false)
    }
  }
  if (falseCounter >= 3) {
    totalEnd()
  }

  function checkCorrect(item) {
    item.target.style.backgroundColor = "#43de05";

  }

  function checkWrong(item) {
    item.target.style.backgroundColor = "#e32626";
    falsePerRound++
  }

  function endThis() {
    document
      .querySelectorAll(".flashItem")
      .forEach((item) => (item.style.backgroundColor = ""));
    dispatch(
      pushTablet({
        name: players[players.length - 1].name,
        score: players[players.length - 1].score,
      })
    );
  }

  if (settings.confirmSettings === false) {
    return (
      <>
        <div className='gameItem'>
          <div id='1' className='flashItem'></div>
          <div id='2' className='flashItem'></div>
          <div id='3' className='flashItem'></div>
          <div id='4' className='flashItem'></div>
        </div>
      </>
    );
  } else if (settings.confirmSettings === true && imFlashed === false) {
    return (
      <>
        <div>
          <button className={hideClass} id='startButton' onClick={startGame}>Почати гру!</button>
        </div>
        <div className='gameItem'>
          <div id='1' className='flashItem'></div>
          <div id='2' className='flashItem'></div>
          <div id='3' className='flashItem'></div>
          <div id='4' className='flashItem'></div>
        </div>
      </>
    );
  } else if (settings.confirmSettings === true && imFlashed === true) {
    return (
      <>
        <div>
          <button className={hideClass} id='startButton' onClick={startGame}>Почати гру!</button>
        </div>
        <div className='gameItem'>
          <div id='1' className='flashItem' onClick={itemCheck}></div>
          <div id='2' className='flashItem' onClick={itemCheck}></div>
          <div id='3' className='flashItem' onClick={itemCheck}></div>
          <div id='4' className='flashItem' onClick={itemCheck}></div>
        </div>
      </>
    );
  }
}

export default GameBoard;
