import React, { useState } from 'react';
import icons from '../../utils/icons';
import { useLocation } from 'react-router-dom';

const htmlElement = document.querySelector('html');


const BackgroundToggle = () => {
    const [theme, setTheme] = useState('default')
    const { pathname } = useLocation();


    console.log(pathname);


    const changeBackIconOnToggle = (newState) => {

        const backIcon = document.getElementsByTagName('a')[4];

        if (["ocean", "bubble"].includes(newState)) {
            backIcon.firstChild.src = icons["goBackBlack"].src
        } else {
            backIcon.firstChild.src = icons["goBack"].src
        }
    }

    const handleClick = () => {

        // set theme by passing in a callback function into the hook
        setTheme((prevState) => {
            const themeList = ['default', 'ocean', 'geometric', 'mountain', 'bubble']
            const idx = themeList.indexOf(prevState)
            const newState = idx === (themeList.length - 1) ? themeList[0] : themeList[idx + 1]
            htmlElement.classList.replace(prevState,newState)
            if (['/signup', '/signin', '/guest', '/'].includes(pathname)) {
                changeBackIconOnToggle(newState);
            }
            return newState
        })


    }

    return (
        <div><button id='Toggle'onClick={handleClick} >{ theme }</button></div>
    )
}

export default BackgroundToggle;

