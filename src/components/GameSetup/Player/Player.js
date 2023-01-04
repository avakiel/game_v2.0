import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pushPlayer, selectPlayers } from '../../../Store/PlayersReducer';
import { selectSettings } from '../../../Store/SettingsReducer';


export const Player = (props) => {
    let settings = useSelector(selectSettings)
    let players = useSelector(selectPlayers)


    const dispatch = useDispatch()

    
    function lightIt(event) {
        let player = document.querySelector('.playerName').value
        let button = document.getElementById('addPlayer')
        if (players.length === 0 && player !== '') {
            button.classList.add('addButton')
        }
    }


    const setPlayer = () => {
        let player = document.querySelector('.playerName').value
        if (player !== '') {
            dispatch(pushPlayer(player))
            document.getElementById('addPlayer').classList.remove('addButton')
        }

    }
    if (settings.confirmSettings === true) {
        return (
            <div className='player'>
                <input disabled id='playerName' className='playerName' defaultValue='' onChange={lightIt}></input>
                <button disabled id='addPlayer' className='addPlayer buttons' onClick={setPlayer}>Добавити гравця</button>
            </div>
        )
    } else {
        return (
            <div className='player'>
                <input id='playerName' className='playerName' defaultValue='' onChange={lightIt} placeholder='Введіть ваше імя...'></input>
                <button id='addPlayer' className='addPlayer buttons' onClick={setPlayer} onMouseDown={lightIt}>Добавити гравця</button>
            </div>
        )
    }
}