import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusCount, plusCount, selectSettings } from "../../../../Store/SettingsReducer";

export const CountControl = (props) => {
  let settings = useSelector(selectSettings)
  let dispatch = useDispatch()


  const increaseCount = () => {
    dispatch(plusCount())
  };
  const decreaseCount = () => {
    if (settings.countValue !== 0) {
      dispatch(minusCount())
    }
  };
  if (props.status === false && props.check === false) {
    return (
      <div className='countControl'>
        <button disabled id='increaseCount' className="increaseCount buttons" onClick={increaseCount}>
          Збільшити кількість
        </button>
        <div className="countValue buttons">{settings.countValue}</div>
        <button disabled id='decreaseCount' className="decreaseCount buttons" onClick={decreaseCount}>
          Зменшити кількість
        </button>
      </div>
    );
  } else if (props.status === true && props.check === false) {
    return (
      <div className='countControl'>
        <button id='increaseCount' className="increaseCount buttons activeCountPlus" onClick={increaseCount}>
        Збільшити кількість
        </button>
        <div className="countValue buttons">{settings.countValue}</div>
        <button id='decreaseCount' className="decreaseCount buttons activeCountMinus" onClick={decreaseCount}>
        Зменшити кількість
        </button>
      </div>
    );
  } else if (props.check === true) {
    return (
      <div className='countControl'>
        <button disabled id='increaseCount' className="increaseCount buttons" onClick={increaseCount}>
        Збільшити кількість
        </button>
        <div className="countValue buttons">{settings.countValue}</div>
        <button disabled id='decreaseCount' className="decreaseCount buttons" onClick={decreaseCount}>
        Зменшити кількість
        </button>
      </div>
    );
  }
};
