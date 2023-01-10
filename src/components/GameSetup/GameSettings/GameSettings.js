import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPlayers } from "../../../Store/PlayersReducer";
import { selectSettings, setConfirm, setCount, setSettings, setSpeed } from "../../../Store/SettingsReducer";
import Controls from "./Controls/Controls";


export const GameSettings = (props) => {
  let players = useSelector(selectPlayers)
  let settings = useSelector(selectSettings)
  let dispatch = useDispatch()
  

  const setFlashCountToStore = (value) => {
     dispatch(setCount(value))
  }
  const setFlashSpeedToStore = (value) => {
     dispatch(setSpeed(value))
  }

  function setCheck() {
    dispatch(setConfirm(true))
  }

  
 

  if (players.length !== 0 && settings.countValue !== 0 && settings.speedValue !== 0 && settings.confirmSettings === false) {
    return (
      <div className='controls'>
        <Controls value={settings.countValue} setValue={setFlashCountToStore} name='Кількість' />
        <Controls value={settings.speedValue} setValue={setFlashSpeedToStore} name='Швидкість' />
        <button className="checkSetup buttons addButton" onClick={setCheck}>Я готовий!</button>
      </div>
    );
  } else if (players.player === '') {
    return (
      <div className='controls'>
        <Controls value={settings.countValue} setValue={setFlashCountToStore} name='Кількість' disabled={true} />
        <Controls value={settings.speedValue} setValue={setFlashSpeedToStore} name='Швидкість' disabled={true} />
        <button disabled className="checkSetup buttons disabledButton" onClick={setCheck}>Я готовий!</button>
      </div>
    );
  } else if ((settings.countValue === 0 && players.length !== 0 && settings.confirmSettings === false) || (settings.speedValue === 0 && players.length !== 0 && settings.confirmSettings === false)) {
    return (
      <div className='controls'>
        <Controls value={settings.countValue} setValue={setFlashCountToStore} name='Кількість' />
        <Controls value={settings.speedValue} setValue={setFlashSpeedToStore} name='Швидкість' />
        <button disabled className="checkSetup buttons disabledButton" onClick={setCheck}>Я готовий!</button>
      </div>
    );
  } else if (settings.confirmSettings === true) {
    return (
      <div className='controls'>
        <Controls value={settings.countValue} setValue={setFlashCountToStore} name='Кількість' disabled={true} />
        <Controls value={settings.speedValue} setValue={setFlashSpeedToStore} name='Швидкість' disabled={true} />
        <button disabled className="checkSetup buttons disabledButton" onClick={setCheck}>Я готовий!</button>
      </div>
    );
  }
}
