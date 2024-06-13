import React, { useEffect, useState } from 'react'
import './stopwatch.css'
export default function StopWatch() {
    const [timer, setTimer] = useState(0);
    const [stopTimer, setStopTimer] = useState(false);

    useEffect(() => {
        document.title = "Stopwatch";
        let timerInterval = null;
        if (stopTimer) {
            timerInterval = setInterval(() => {
                setTimer(e => e + 1)
            }, 100);
        } else {
            clearInterval(timerInterval);
        }
        return () => { clearInterval(timerInterval) }
    }, [stopTimer])

    const getTime = () => {
        return `${(Math.floor(timer / 600))
            .toString().padStart(2, '0')} : 
        ${(Math.floor(timer / 10) % 60).toString()
                .padStart(2, '0')} :
        ${(Math.floor(timer % 10)).toString()
                .padStart(2, '0')}`
    }
    return (
        <div>
            <h2>Stopwatch</h2>
            <h2 className='stopwatchfont'>{getTime()}</h2>
            <div>
                <button onClick={
                    ()=>setStopTimer(true)
                }>Start</button>
                <button onClick={
                    ()=>setStopTimer(false)
                }>Stop</button>
                <button onClick={
                    ()=>setTimer(0)
                }>Restart</button>
            </div>
        </div>
    )
}
