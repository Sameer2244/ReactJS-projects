import React, { useEffect, useRef, useState } from 'react';
import './dvdlogobounce.css';

let horizontalSteps = 0, verticalSteps = 0;

export default function DVDLogoBounce() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const logoRef = useRef(null);
    const invertXRef = useRef(1);
    const invertYRef = useRef(1);
    const logoSpeed = 5; 

    const moveLogo = () => {
        horizontalSteps += logoSpeed * invertXRef.current;
        verticalSteps += logoSpeed * invertYRef.current;
        const logo = logoRef.current;
        const logoRect = logo.getBoundingClientRect();

        if (horizontalSteps + logoRect.width >= windowSize.width
             || horizontalSteps <= 0) {
            invertXRef.current = -invertXRef.current;
        }
        if (verticalSteps + logoRect.height >= windowSize.height 
            || verticalSteps <= 0) {
            invertYRef.current = -invertYRef.current;
        }

        logo.style.transform = `translate(${horizontalSteps}px,
         ${verticalSteps}px)`;
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth,
                 height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);

        const movingInterval = setInterval(moveLogo, 50);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(movingInterval);
        }
    }, []);

    return (
        <div>
            <div className='logo-container' ref={logoRef} >
                <img src='./dvd.png' alt='DVD Logo'/>
            </div>
        </div>
    )
}
