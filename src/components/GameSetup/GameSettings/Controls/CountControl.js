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
        <button disabled id='increaseCount' onClick={increaseCount}>
          Up Count
        </button>
        <div>{settings.countValue}</div>
        <button disabled id='decreaseCount' onClick={decreaseCount}>
          Down Count
        </button>
      </div>
    );
  } else if (props.status === true && props.check === false) {
    return (
      <div className='countControl'>
        <button id='increaseCount' onClick={increaseCount}>
          Up Count
        </button>
        <div>{settings.countValue}</div>
        <button id='decreaseCount' onClick={decreaseCount}>
          Down Count
        </button>
      </div>
    );
  } else if (props.check === true) {
    return (
      <div className='countControl'>
        <button disabled id='increaseCount' onClick={increaseCount}>
          Up Count
        </button>
        <div>{settings.countValue}</div>
        <button disabled id='decreaseCount' onClick={decreaseCount}>
          Down Count
        </button>
      </div>
    );
  }
};
