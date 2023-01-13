import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectPlayers } from '../../Store/PlayersReducer'
import { selectSettings } from '../../Store/SettingsReducer'

function SkillLevel() {

  let settings = useSelector(selectSettings)
  let player = useSelector(selectPlayers)

  useEffect(() => {
    if (settings.countValue === 0 && player.player !== '') {
      removeSkillLight()
    } else if (settings.countValue !== 0 && settings.countValue < 3) {
      removeSkillLight()
      document.querySelector('.easy').classList.add('skillCheck')
    } else if (settings.countValue >= 3 && settings.countValue < 5) {
      removeSkillLight()
      document.querySelector('.normal').classList.add('skillCheck')
    } else if (settings.countValue >= 5 && settings.countValue < 6) {
      removeSkillLight()
      document.querySelector('.notBad').classList.add('skillCheck')
    } else if (settings.countValue >= 6 && settings.countValue < 8) {
      removeSkillLight()
      document.querySelector('.hard').classList.add('skillCheck')
    } else if (settings.countValue >= 8 && settings.countValue < 10) {
      removeSkillLight()
      document.querySelector('.insaine').classList.add('skillCheck')
    } else if (settings.countValue >= 10) {
      removeSkillLight()
      document.querySelector('.god').classList.add('skillCheck')
    }
  }, [settings, player])

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
        +20
      </div>
      <div className='notBad skillLight'>
        Not bad <br />
        +40
      </div>
      <div className='hard skillLight'>
        Hard <br />
        +60
      </div>
      <div className='insaine skillLight'>
        INSAINE!! <br />
        +80
      </div>
      <div className='god skillLight'>
        GOD!!! <br />
        +100
      </div>
    </div>
  )
}

export default SkillLevel