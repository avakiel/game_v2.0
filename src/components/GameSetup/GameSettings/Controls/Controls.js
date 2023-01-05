import React from 'react'

export default function Controls(props) {

    const increase = () => {
        props.setValue(props.value + 1)
    };
    const decrease = () => {
        if (props.value !== 0) {
            props.setValue(props.value - 1)
        }
    };

    if (props.disabled) {
        return (
            <div className='countControl'>
                <button disabled id='increaseCount' className="increaseCount buttons disabledButton" onClick={increase}>
                    Збільшити {props.name}
                </button>
                <div className="countValue buttons">{props.value}</div>
                <button disabled id='decreaseCount' className="decreaseCount buttons disabledButton" onClick={decrease}>
                    Зменшити {props.name}
                </button>
            </div>
        );
    } else {
        return (
            <div className='countControl'>
                <button id='increaseCount' className="increaseCount buttons activeCountPlus" onClick={increase}>
                    Збільшити {props.name}
                </button>
                <div className="countValue buttons">{props.value}</div>
                <button id='decreaseCount' className="decreaseCount buttons activeCountMinus" onClick={decrease}>
                    Зменшити {props.name}
                </button>
            </div>
        );
    }

}

