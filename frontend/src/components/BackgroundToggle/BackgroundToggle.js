import React, { useState } from 'react';
const element = document.querySelector('html');


const BackgroundToggle = () => {
    const [theme, setTheme] = useState('default')

    const handleClick = () => {

        // set theme by passing in a callback function into the hook
        setTheme((prevState) => {
            const themeList = ['default', 'ocean', 'geometric', 'mountain', 'bubble']
            const idx = themeList.indexOf(prevState)
            const newState = idx === (themeList.length - 1) ? themeList[0] : themeList[idx + 1]
            element.classList.replace(prevState,newState)
            return newState
        })
        
        
    }
    
    return (
        <div><button id='Toggle'onClick={handleClick} >{ theme }</button></div>
    )
}

export default BackgroundToggle;

