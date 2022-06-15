import React, { useEffect, useState } from 'react';

const handleTheme = (theme) => {
    switch (theme) {
        // case 'space':
        //     <html style={{ backgroundImage: `url("frontend/src/images/light.svg")` }} ></html>
        case 'ocean':
            <html style={{ backgroundImage: 'url("frontend/src/images/ocean.svg")' }} ></html>
            break;
        // case 'modern':
        //     <html style={{ backgroundImage: `url("frontend/src/images/light.svg")` }} ></html>
        // case 'nature':
        //     <html style={{ backgroundImage: `url("frontend/src/images/light.svg")` }} ></html>
        // case 'lava':
        //     <html style={{ backgroundImage: `url("frontend/src/images/light.svg")` }} ></html>
        // case 'bubbles':
        //     <html style={{ backgroundImage: `url("frontend/src/images/light.svg")` }} ></html>
        default:
            <html style={{ backgroundImage: 'url("frontend/src/images/default.svg")' }} ></html>
    }
}
const BackgroundToggle = () => {
    const [theme, setTheme] = useState('default')

    const handleClick = () => {

        const newTheme =  setTheme((prevState) => {
            const themeList = ['default', 'space', 'ocean', 'modern', 'nature', 'lava', 'bubbles']
            const idx = themeList.indexOf(prevState)

            return idx === (themeList.length - 1) ? themeList[0] : themeList[idx + 1]
        })
        handleTheme(newTheme)
    }


    return (
        <div><button onClick={handleClick} >{ theme }</button></div>
    )
}

export default BackgroundToggle;

