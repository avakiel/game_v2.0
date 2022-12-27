import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTablet } from '../../Store/FameReducer';

export const HallOfFame = (props) => {
    let dispatch = useDispatch()
    let selectFame = useSelector(selectTablet)
    console.log(selectFame)
    return (
        <div>
            <p>
                The Hall Of Fame
            </p>
            <div id='hallOfFame' className='playerBoard'><ul>{selectFame.map(item=><li>{item.name + '   ' + item.score}</li>)}
            </ul>
            </div>
        </div>
    )
}