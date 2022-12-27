import React from 'react';
import { useSelector } from 'react-redux';
import { selectPlayers } from '../../Store/PlayersReducer';
import { selectScore } from '../../Store/ScoreReducer';
import SkillLevel from './SkillLevel';


function Stats(props) {
  let players = useSelector(selectPlayers)
  let score = useSelector(selectScore)
    return (
      <div className='statsInfo'>

        <div className='playerInfo'>
          <p className='scoreRow'>Рахунок:{players.length === 0?'' : score} </p>
          <p className='playerRow'>Гравець: {players.length === 0?'' : players[players.length-1].name} </p>
          <SkillLevel />
        </div>
      </div>
    )
  }

export default Stats;