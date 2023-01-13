import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushTablet } from "../../Store/FameReducer";
import {
  refreshGame,
  selectGameState,
  setFlashRandom,
} from "../../Store/GameReducer";
import {
  playerScore,
  refreshPlayer,
  selectPlayers,
} from "../../Store/PlayersReducer";
import { refreshSettings, selectSettings } from "../../Store/SettingsReducer";

function GameBoard() {
  let gameState = useSelector(selectGameState);
  let gameSettings = useSelector(selectSettings);
  let players = useSelector(selectPlayers);
  let settings = useSelector(selectSettings);
  const dispatch = useDispatch();

  const [imFlashed, setImFlashed] = useState(false);
  const [hideClass, setHideClass] = useState("");
  const [falseCounter, setFalseCounter] = useState(0);
  const [turnCount, setTurnCount] = useState(0);
  const [roundWrongTurns, setRoundWrongTurns] = useState(0);
  const [itemCounter, setItemCounter] = useState()


  useEffect(() => {
    if (turnCount === gameState.flashRandom.length) {
      setTimeout(gameEnd, 1000);
      setImFlashed(false);
      setTurnCount(0);
      setRoundWrongTurns(0)
    }
  }, [turnCount]);

  

  useEffect(() => {
    if (falseCounter >= 5) {
      dispatch(playerScore(gameState.flashRandom.length - roundWrongTurns))
      dispatch(
        pushTablet({
          name: players.player,
          score: players.score,
        })
      );
      totalEnd();
    }
  }, [falseCounter]);

  function startGame() {
    setHideClass("hide");
    const gameArr = getGameArray();
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
    setFalseCounter(0);
    setImFlashed(false);
    setHideClass("");

    
    

    dispatch(refreshGame());
    dispatch(refreshSettings());
    dispatch(refreshPlayer());
    
    alert("game over");

    setTurnCount(0);
    setRoundWrongTurns(0);
    document.querySelector('.playerName').value = ''
  }

  function gameEnd() {
    document
      .querySelectorAll(".flashItem")
      .forEach((item) =>{
        (item.classList.remove('flashItemTrue', 'flashItemFalse'))
        item.innerHTML = ''
      });
    setHideClass("");
    setFalseCounter(falseCounter + roundWrongTurns);
    dispatch(playerScore(gameState.flashRandom.length - roundWrongTurns));
  }

  

  function turnCheck(event) {
    if (Number(event.target.id) === gameState.flashRandom[turnCount]) {
      setTurnCount(turnCount + 1);
      signTurn(event, true);
      event.target.innerHTML++
    } else if (Number(event.target.id) !== gameState.flashRandom[turnCount]) {
      event.target.innerHTML++
      signTurn(event, false);
      setTurnCount(turnCount + 1);
      setRoundWrongTurns(roundWrongTurns + 1);
    }
  }

  

  const signTurn = (event, isRight) => {
    isRight
      ? event.target.classList.add('flashItemTrue')
      : event.target.classList.add('flashItemFalse');
  };

  

  function endThis() {
    totalEnd()
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
          <button className={hideClass} id='startButton' onClick={startGame}>
            Почати гру!
          </button>
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
          <button className={hideClass} id='startButton' onClick={startGame}>
            Почати гру!
          </button>
        </div>
        <div className='gameItem'>
          <div id='1' className='flashItem' onClick={turnCheck}></div>
          <div id='2' className='flashItem' onClick={turnCheck}></div>
          <div id='3' className='flashItem' onClick={turnCheck}></div>
          <div id='4' className='flashItem' onClick={turnCheck}></div>
        </div>
      </>
    );
  }
}

export default GameBoard;
