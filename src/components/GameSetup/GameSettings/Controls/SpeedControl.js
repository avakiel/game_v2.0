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
        <button disabled id='increaseSpeed' className="increaseCount buttons" onClick={increaseSpeed}>
          Збільшити швидкість
        </button>
        <div className="countValue buttons">{settings.speedValue}</div>
        <button disabled id='decreaseSpeed' className="decreaseCount buttons" onClick={decreaseSpeed}>
          Зменшити швидкість
        </button>
      </div>
    );
  } else if (props.status === true && props.check === false) {
    return (
      <div className='speedControl'>
        <button id='increaseSpeed' className="increaseCount buttons activeCountPlus" onClick={increaseSpeed}>
        Збільшити швидкість
        </button>
        <div className="countValue buttons">{settings.speedValue}</div>
        <button id='decreaseSpeed' className="decreaseCount buttons activeCountMinus" onClick={decreaseSpeed}>
        Зменшити швидкість
        </button>
      </div>
    );
  } else if (props.check === true) {
    return (
      <div className='speedControl'>
        <button disabled id='increaseSpeed' className="increaseCount buttons" onClick={increaseSpeed}>
         Збільшити швидкість
        </button>
        <div className="countValue buttons">{settings.speedValue}</div>
        <button disabled id='decreaseSpeed' className="decreaseCount buttons" onClick={decreaseSpeed}>
        Зменшити швидкість
        </button>
      </div>
    );
  }
};
