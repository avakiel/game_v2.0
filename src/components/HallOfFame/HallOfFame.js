import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTablet } from '../../Store/FameReducer';

export const HallOfFame = (props) => {
    let dispatch = useDispatch()
    let selectFame = useSelector(selectTablet)
    return (
        <div className='ScoreBoard'>
            <div>
                The Hall Of Fame
            </div>
            <div id='hallOfFame' className='playerBoard'><ul>{selectFame.map((item,index)=><li key={item.name}>{index+1 + ') '+item.name + ' - ' + item.score}</li>)}
            </ul>
            </div>
        </div>
    )
}