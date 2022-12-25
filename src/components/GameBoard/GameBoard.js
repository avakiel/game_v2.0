import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pushTablet } from '../../Store/FameReducer';
import { refreshCount, selectGameState, setEndRandomLight, setFalseCount, setFlashRandom, setGameReady, setStartRandomLight } from '../../Store/GameReducer';
import { pushPlayer, selectPlayers } from '../../Store/PlayersReducer';
import { selectScore, setScore } from '../../Store/ScoreReducer';
import { confirmSettings, selectSettings } from '../../Store/SettingsReducer';



function GameBoard(props) {

  let gameState = useSelector(selectGameState)
  let gameSettings = useSelector(selectSettings)
  let score = useSelector(selectScore)
  let players = useSelector(selectPlayers)
  let dispatch = useDispatch()

  let [hideClass, setHideClass] = useState('hide')

  let settings = useSelector(selectSettings)

  if (settings.confirmSettings === true && hideClass === 'hide' && gameState.gameReady === false) {
    setHideClass('')
  }


  function startGame() {
    dispatch(setGameReady(true))
    setHideClass('hide')
    dispatch(setStartRandomLight(true))


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
    dispatch(setFlashRandom(gameArr))
    flashLight(gameArr)
  }
  function turnOffFlash(item) {
    setTimeout(() => {
      item.classList.remove('active')
    }, (1000 - gameSettings.speedValue * 10) - 200)
  }

  function flashLight(arr) {
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
    dispatch(setEndRandomLight(true))
    dispatch(setStartRandomLight(false))
  }

  


  function gameEnd () {
    document.querySelectorAll('.flashItem').forEach(item=>item.style.backgroundColor='')
    dispatch(setGameReady(false))
    setHideClass('')
    dispatch(setEndRandomLight(false))
  }
  


  let randomArr = gameState.flashRandom
  let playerCheck = []
  let [count, setCount] = useState(0)
  let [falseCount, setFalseCount] = useState(0)


  
  
if (falseCount === 5) {
  dispatch(pushTablet({
    name:players[players.length-1].name,
    score:score
  }))
  dispatch(setGameReady(false))
    setHideClass('')
    dispatch(setStartRandomLight(false))
    dispatch(setEndRandomLight(false))
    dispatch(confirmSettings(false))
    dispatch(refreshCount())
}

  function itemCheck(event) {

    playerCheck.push(Number(event.target.id))
    if (Number(event.target.id) === randomArr[count]) {
      event.target.style.backgroundColor = 'green'
      setCount(count+1)
    } else {
      setCount(count+1)
      event.target.style.backgroundColor = 'red'
     setFalseCount(falseCount+1)
    }
    if (playerCheck.length === randomArr.length && playerCheck.length !== 0) {
      dispatch(setScore((playerCheck.length-falseCount) * 35))
      setTimeout(gameEnd,1000)
     }
  }





  if ((gameState.startRandomLight === true && gameState.endRandomLight === false) || (gameState.startRandomLight === false && gameState.endRandomLight === false)) {
    return (
      <>
        <button className={hideClass} id="startButton" onClick={startGame}>LET'S START THIS!</button>
        <div className='gameItem'>
          <div id='1' className="flashItem"></div>
          <div id='2' className="flashItem"></div>
          <div id='3' className="flashItem"></div>
          <div id='4' className="flashItem"></div>
        </div>
      </>
    );
  } else if (gameState.startRandomLight === false && gameState.endRandomLight === true) {
    return (
      <>
        <button className={hideClass} id="startButton" onClick={startGame}>LET'S START THIS!</button>
        <div className='gameItem'>
          <div id='1' className="flashItem" onClick={itemCheck}></div>
          <div id='2' className="flashItem" onClick={itemCheck}></div>
          <div id='3' className="flashItem" onClick={itemCheck}></div>
          <div id='4' className="flashItem" onClick={itemCheck}></div>
        </div>
      </>
    );
  }


}



export default GameBoard;