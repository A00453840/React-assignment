import React from 'react';

const Weather = (props) => {
    return(
        props.data.isCelsius === true ? 
    <div>
        <p> {props.degrees} &#8451;</p>
        <button style={{backgroundColor: '#2424' }} onClick={() => props.data.changetoOther(false)}>Convert to Fahrenheit</button>
    </div> :
    <div>
    <p> {((props.degrees * 1.8)+32).toFixed(2)} &#8457;</p>
    
    <button style={{backgroundColor: '#2424' }} onClick={() => props.data.changetoOther(true)}>Convert to Celsius</button>
    
</div>
    )
}
export default Weather;