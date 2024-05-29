import React, { useEffect, useState } from 'react'
import './analogclock.css'
export default function AnalogClock() {
    const [hourHand,setHourHand]=useState(0);
    const [minuteHand,setMinuteHand]=useState(0);
    const [secondHand,setSecondHand]=useState(0);
    useEffect(() => {
        document.title = "Analog Clock";
        const timeInterval= setInterval(()=>{
            let time = new Date().toLocaleTimeString()
            .split(" ")[0].split(":")
            let hour= time[0]
            let minute= time[1]
            let second= time[2]
            setHourHand((360*hour)/60)
            setMinuteHand((360*minute)/60)
            setSecondHand((360*second)/60)
            console.log(hour,minute,second)
        },1000)
        return ()=>{
            clearInterval(timeInterval)
        }
    }, [])
    return (
        <div className='clock-container'>
            <div className='center'></div>
            <div className='clock-hands'>
                <div className='hour-hand hand' style={{
                    transform:`rotate(${hourHand}deg)`
                }}></div>
                <div className='minute-hand hand' style={{
                    transform:`rotate(${minuteHand}deg)`
                }}></div>
                <div className='second-hand hand' style={{
                    transform:`rotate(${secondHand}deg)`
                }}></div>
            </div>
        </div>
    )
}