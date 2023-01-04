import React from 'react';
import { useSelector } from 'react-redux';
import { selectPlayers } from '../../Store/PlayersReducer';
import SkillLevel from './SkillLevel';


function Stats(props) {
  let players = useSelector(selectPlayers)
    return (
      <div className='statsInfo'>

        <div className='playerInfo'>
          <p className='scoreRow'>Рахунок:{players.length === 0?'' :players[players.length-1].score} </p>
          <p className='playerRow'>Гравець: {players.length === 0?'' : players[players.length-1].name} </p>
          <SkillLevel />
        </div>
      </div>
    )
  }

export default Stats;