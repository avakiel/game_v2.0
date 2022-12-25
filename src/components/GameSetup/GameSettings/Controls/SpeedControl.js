import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusSpeed, plusSpeed, selectSettings } from "../../../../Store/SettingsReducer";

export const SpeedControl = (props) => {
  let settings = useSelector(selectSettings)
  let dispatch = useDispatch()

  const increaseSpeed = () => {
    dispatch(plusSpeed())
  };
  const decreaseSpeed = () => {
    if (settings.speedValue !== 0) {
      dispatch(minusSpeed())
    }
  };
  if (props.status === false && props.check === false) {
    return (
      <div className='speedControl'>
        <button disabled id='increaseSpeed' onClick={increaseSpeed}>
          Up Speed
        </button>
        <div>{settings.speedValue}</div>
        <button disabled id='decreaseSpeed' onClick={decreaseSpeed}>
          Down Speed
        </button>
      </div>
    );
  } else if (props.status === true && props.check === false) {
    return (
      <div className='speedControl'>
        <button id='increaseSpeed' onClick={increaseSpeed}>
          Up Speed
        </button>
        <div>{settings.speedValue}</div>
        <button id='decreaseSpeed' onClick={decreaseSpeed}>
          Down Speed
        </button>
      </div>
    );
  } else if (props.check === true) {
    return (
      <div className='speedControl'>
        <button disabled id='increaseSpeed' onClick={increaseSpeed}>
          Up Speed
        </button>
        <div>{settings.speedValue}</div>
        <button disabled id='decreaseSpeed' onClick={decreaseSpeed}>
          Down Speed
        </button>
      </div>
    );
  }
};
