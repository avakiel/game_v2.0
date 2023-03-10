import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPlayers } from '../../Store/PlayersReducer'
import { selectSettings, setDifficulty } from '../../Store/SettingsReducer'

function SkillLevel(props) {
  let dispatch = useDispatch()
  let settings = useSelector(selectSettings)
  let player = useSelector(selectPlayers)
  

  useEffect(() => {
    let difficulty = 0
    if (settings.countValue === 0 && player.player !== '') {
      removeSkillLight()
    } else if (settings.countValue !== 0 && settings.countValue < 3) {
      removeSkillLight()
      document.querySelector('.easy').classList.add('skillCheck')
    } else if (settings.countValue >= 3 && settings.countValue < 5) {
      removeSkillLight()
      document.querySelector('.normal').classList.add('skillCheck')
      difficulty = 2
    } else if (settings.countValue >= 5 && settings.countValue < 6) {
      removeSkillLight()
      document.querySelector('.notBad').classList.add('skillCheck')
      difficulty = 4
    } else if (settings.countValue >= 6 && settings.countValue < 8) {
      removeSkillLight()
      document.querySelector('.hard').classList.add('skillCheck')
      difficulty = 6
    } else if (settings.countValue >= 8 && settings.countValue < 10) {
      removeSkillLight()
      document.querySelector('.insaine').classList.add('skillCheck')
      difficulty = 8
    } else if (settings.countValue >= 10) {
      removeSkillLight()
      document.querySelector('.god').classList.add('skillCheck')
      difficulty = 10
    }else if (settings.countValue === 0 && player.player === '') {
      removeSkillLight()
    }

    if (props.isReady) {
      dispatch(setDifficulty(difficulty))
      difficulty = 0
    }
  }, [settings, dispatch, player, props.isReady])

  function removeSkillLight() {
    let divs = document.querySelectorAll('.skillLight')
    divs.forEach(item => item.classList.remove('skillCheck'))
  }



  return (
    <div className='skillLevel'>
      <div className='easy skillLight'>
        Easy <br />
        +0
      </div>
      <div className='normal skillLight'>
        Normal <br />
        +2
      </div>
      <div className='notBad skillLight'>
        Not bad <br />
        +4
      </div>
      <div className='hard skillLight'>
        Hard <br />
        +6
      </div>
      <div className='insaine skillLight'>
        INSAINE!! <br />
        +8
      </div>
      <div className='god skillLight'>
        GOD!!! <br />
        +10
      </div>
    </div>
  )
}

export default SkillLevel