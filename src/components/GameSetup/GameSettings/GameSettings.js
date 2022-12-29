import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPlayers } from "../../../Store/PlayersReducer";
import { confirmSettings, selectSettings, setSetup } from "../../../Store/SettingsReducer";
import { CountControl } from "./Controls/CountControl";
import { SpeedControl } from "./Controls/SpeedControl";

export  const  GameSettings = (props) => {
  let players = useSelector(selectPlayers)
  let settings = useSelector(selectSettings)
  let dispatch = useDispatch()


function setCheck() {
  dispatch(confirmSettings(true))
}

  if (settings.speedValue === 0 || settings.countValue === 0) {
    return (
      <div className='controls'>
        <CountControl status={players.length === 0?false:players[players.length-1].ReadySettings} check={settings.confirmSettings} />
        <SpeedControl status={players.length === 0?false:players[players.length-1].ReadySettings} check={settings.confirmSettings}/>
        <button disabled className="checkSetup buttons" onClick={setCheck}>Я готовий!</button>
      </div>
    );
  } else if (settings.speedValue !== 0 && settings.countValue !== 0 && settings.confirmSettings === false) {
    return (
      <div className='controls'>
        <CountControl status={players.length === 0?false:players[players.length-1].ReadySettings} check={settings.confirmSettings} />
        <SpeedControl status={players.length === 0?false:players[players.length-1].ReadySettings} check={settings.confirmSettings}/>
        <button className="checkSetup addButton activeSetup buttons" onClick={setCheck}>Я готовий!</button>
      </div>
    );
  } else if (settings.speedValue !== 0 && settings.countValue !== 0 && settings.confirmSettings === true) {
    return (
      <div className='controls'>
        <CountControl status={players.length === 0?false:players[players.length-1].ReadySettings} check={settings.confirmSettings} />
        <SpeedControl status={players.length === 0?false:players[players.length-1].ReadySettings} check={settings.confirmSettings}/>
        <button disabled className="checkSetup buttons" onClick={setCheck}>Я готовий!</button>
      </div>
    );
  }
}
