import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import AboutMe from './AboutMe';

function AppCustom() {
    return(
        <div className="AppCustom">
            <HelloWorld />
            <AboutMe />
        </div>
    )
}

export default AppCustom;