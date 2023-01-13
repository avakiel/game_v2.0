import React from 'react';
import { useSelector } from 'react-redux';
import { selectPlayers } from '../../Store/PlayersReducer';
import { selectSettings } from '../../Store/SettingsReducer';
import SkillLevel from './SkillLevel';


function Stats(props) {
  let players = useSelector(selectPlayers)
  let settings = useSelector(selectSettings)
    return (
      <div className='statsInfo'>

        <div className='playerInfo'>
          <p className='scoreRow'>Рахунок:{players.score} </p>
          <p className='playerRow'>Гравець: {players.player} </p>
          <SkillLevel isReady = {settings.confirmSettings}/>
        </div>
      </div>
    )
  }

export default Stats;