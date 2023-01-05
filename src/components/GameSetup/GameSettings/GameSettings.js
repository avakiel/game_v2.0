import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPlayers } from "../../../Store/PlayersReducer";
import { selectSettings, setSettings } from "../../../Store/SettingsReducer";
import Controls from "./Controls/Controls";


export const GameSettings = (props) => {
  let players = useSelector(selectPlayers)
  let settings = useSelector(selectSettings)
  let dispatch = useDispatch()
  let [flashCount, setFlashCount] = useState(0)
  let [flashSpeed, setFlashSpeed] = useState(0)


  function setCheck() {
    dispatch(setSettings({
      count: flashCount,
      speed: flashSpeed,
      confirm: true
    }))
  }

  useEffect(() => {
    setFlashCount(settings.countValue)
    setFlashSpeed(settings.speedValue)
  }, [settings])

  if (players.length !== 0 && flashCount !== 0 && flashSpeed !== 0 && settings.confirmSettings === false) {
    return (
      <div className='controls'>
        <Controls value={flashCount} setValue={setFlashCount} name='Кількість' />
        <Controls value={flashSpeed} setValue={setFlashSpeed} name='Швидкість' />
        <button className="checkSetup buttons addButton" onClick={setCheck}>Я готовий!</button>
      </div>
    );
  } else if (players.player === '') {
    return (
      <div className='controls'>
        <Controls value={flashCount} setValue={setFlashCount} name='Кількість' disabled={true} />
        <Controls value={flashSpeed} setValue={setFlashSpeed} name='Швидкість' disabled={true} />
        <button disabled className="checkSetup buttons disabledButton" onClick={setCheck}>Я готовий!</button>
      </div>
    );
  } else if ((flashCount === 0 && players.length !== 0 && settings.confirmSettings === false) || (flashSpeed === 0 && players.length !== 0 && settings.confirmSettings === false)) {
    return (
      <div className='controls'>
        <Controls value={flashCount} setValue={setFlashCount} name='Кількість' />
        <Controls value={flashSpeed} setValue={setFlashSpeed} name='Швидкість' />
        <button disabled className="checkSetup buttons disabledButton" onClick={setCheck}>Я готовий!</button>
      </div>
    );
  } else if (settings.confirmSettings === true) {
    return (
      <div className='controls'>
        <Controls value={flashCount} setValue={setFlashCount} name='Кількість' disabled={true} />
        <Controls value={flashSpeed} setValue={setFlashSpeed} name='Швидкість' disabled={true} />
        <button disabled className="checkSetup buttons disabledButton" onClick={setCheck}>Я готовий!</button>
      </div>
    );
  }
}
