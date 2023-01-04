import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pushTablet, selectTablet } from '../../Store/FameReducer';
import { playerTurn, refreshCount, selectGameState, setEndRandomLight, setFalseCount, setFlashRandom, setGameReady, setPlayerTurn, setStartRandomLight } from '../../Store/GameReducer';
import { pushPlayer, selectPlayers } from '../../Store/PlayersReducer';
import { confirmSettings, refreshSettings, selectSettings } from '../../Store/SettingsReducer';



function GameBoard(props) {
  let tablet = useSelector(selectTablet)
  let gameState = useSelector(selectGameState)
  let gameSettings = useSelector(selectSettings)
  let players = useSelector(selectPlayers)
  let dispatch = useDispatch()
  let settings = useSelector(selectSettings)

  let [gameLoop, setGameLoop] = useState(false)
  let [check, setCheck] = useState(false)




  function startGame() {
    function randomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }

    let startArrLength = settings.countValue
    let min = 1
    let max = 4
    let gameArr = []

    for (let i = 0; i < startArrLength; i++) {
      gameArr.push(randomInteger(min, max))
    }
    dispatch(setFlashRandom(gameArr)) ///??????
    flashLight(gameArr)
  }



  function turnOffFlash(item) {
    setTimeout(() => {
      item.classList.remove('active')
    }, (1000 - gameSettings.speedValue * 10) - 200)
  }

  function flashLight(arr) {
    setGameLoop(true)
    let flashTurn = arr
    let flashItems = document.querySelectorAll('.flashItem')
    let gameTimeOut = 1000 - gameSettings.speedValue * 10



    for (let i = 0; i < flashTurn.length; i++) {
      for (let k = 0; k < flashItems.length; k++) {
        if (Number(flashItems[k].id) === Number(flashTurn[i])) {
          setTimeout((item) => {
            item.classList.add('active')
            turnOffFlash(item)
          }, gameTimeOut * i, flashItems[k])
        }
      }
    }
    setGameLoop(false)
    setCheck(true)
  }

  function totalEnd() {
    document.querySelectorAll('.flashItem').forEach(item => item.style.backgroundColor = '')
    alert('game over')

    dispatch(pushTablet({
      name: players[players.length - 1].name,
      score: players[players.length - 1].score
    }))
  }


  function gameEnd() {
    document.querySelectorAll('.flashItem').forEach(item => item.style.backgroundColor = '')
  }



  let randomArr = gameState.flashRandom
  let playerCheck = []
  let count = 0


  function itemCheck(event) {
    if (gameState.playerTurn === true) {
      playerCheck.push(Number(event.target.id))
      if (Number(event.target.id) === randomArr[count]) {
        count++
        checkCorrect(event)
      } else if (Number(event.target.id) !== randomArr[count]) {
        checkWrong(event)
        count++
      }
      if (playerCheck.length === randomArr.length) {
        // dispatch(setScore(count - wrong > 0 ? (count - wrong) * 35 : 0))
        count = 0
        playerCheck = []
        setTimeout(gameEnd, 1000)
      }
    }
  }
  function checkCorrect(item) {
    item.target.style.backgroundColor = '#43de05'
  }

  function checkWrong(item) {
    item.target.style.backgroundColor = '#e32626'
  }

  function endThis() {
    document.querySelectorAll('.flashItem').forEach(item => item.style.backgroundColor = '')
    dispatch(pushTablet({
      name: players[players.length - 1].name,
      score: players[players.length - 1].score
    }))
  }




  if (settings.confirmSettings === true) {
    return (
      <>
        <div><button className='startButton' id="startButton" onClick={startGame}>Почати гру!</button></div>
        <div className='gameItem'>
          <div id='1' className="flashItem"></div>
          <div id='2' className="flashItem"></div>
          <div id='3' className="flashItem"></div>
          <div id='4' className="flashItem"></div>
        </div>
      </>
    );
  } else if (settings.confirmSettings === false) {
    return (
      <>
        <div className='gameItem'>
          <div id='1' className="flashItem"></div>
          <div id='2' className="flashItem"></div>
          <div id='3' className="flashItem"></div>
          <div id='4' className="flashItem"></div>
        </div>
      </>
    );
  } 
}



export default GameBoard;