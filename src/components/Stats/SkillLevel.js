import React from 'react'
import { useSelector } from 'react-redux'
import { selectSettings } from '../../Store/SettingsReducer'

function SkillLevel() {

  // let countValue = document.querySelector
  // let countSpeed = document.querySelector

  let settings = useSelector(selectSettings)

    return (
      <div className='skillLevel'>
            <div className='easy skillCheck'>
              Easy <br />
              +0
            </div>
            <div className='normal'>
              Normal <br />
              +20
            </div>
            <div className='notBad'>
              Not bad <br />
              +40
            </div>
            <div className='hard'>
              Hard <br />
              +60
            </div>
            <div className='insaine'>
              INSAINE!! <br />
              +80
            </div>
            <div className='god'>
              GOD!!! <br />
              +100
            </div>
          </div>
    )
}

export default SkillLevel