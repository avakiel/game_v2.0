import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pushPlayer } from '../../../Store/PlayersReducer';
import { selectSettings } from '../../../Store/SettingsReducer';


export const Player = (props) => {
    let settings = useSelector(selectSettings)


    const dispatch = useDispatch()

    const setPlayer = () => {
        let player = document.querySelector('.playerName').value
        if (player !== '') {
            dispatch(pushPlayer(player))
        }
        
    }
    if (settings.confirmSettings === true) {
        return (
            <div className='player'>
                <input disabled id='playerName' className='playerName' defaultValue=''></input>
                <button disabled id='addPlayer' className='addPlayer' onClick={setPlayer}>Новий гравець</button>
            </div>
        )
    } else {
        return (
            <div className='player'>
                <input id='playerName' className='playerName' defaultValue=''></input>
                <button id='addPlayer' className='addPlayer' onClick={setPlayer}>Новий гравець</button>
            </div>
        )
    } 
}