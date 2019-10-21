import React from 'react';

function Greeting(props) {

    var today = new Date();
    const hour = today.getHours()
    let timeOfDay;
    
    if (hour < 12) {
        timeOfDay = 'morning';
    } else if (hour >= 12 && hour <= 17 ) {
        timeOfDay = 'afternoon';
    } else {
        timeOfDay = 'night';
    }

    return(
        <div>
            <h1>Hello, {props.name}.</h1>
            <h3>Good {timeOfDay}!</h3>
        </div>
    )
}

export default Greeting;