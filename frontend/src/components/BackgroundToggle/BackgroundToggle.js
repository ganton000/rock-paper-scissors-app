import React, { useState } from 'react';
import icons from '../../utils/icons';

const htmlElement = document.querySelector('html');
const backIcon = document.getElementsByTagName('a')[4];

const BackgroundToggle = () => {
    const [theme, setTheme] = useState('default')

    const handleClick = () => {

        // set theme by passing in a callback function into the hook
        setTheme((prevState) => {
            const themeList = ['default', 'ocean', 'geometric', 'mountain', 'bubble']
            const idx = themeList.indexOf(prevState)
            const newState = idx === (themeList.length - 1) ? themeList[0] : themeList[idx + 1]
            htmlElement.classList.replace(prevState,newState)
            if (["ocean", "bubble"].includes(newState)) {
                backIcon.firstChild.src = icons["goBackBlack"].src
            } else {
                backIcon.firstChild.src = icons["goBack"].src
            }
            return newState
        })
        
        
    }
    
    return (
        <div><button id='Toggle'onClick={handleClick} >{ theme }</button></div>
    )
}

export default BackgroundToggle;

