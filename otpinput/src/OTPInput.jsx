import React, { useRef, useState } from 'react'
import './otp.css'
export default function OTPInput() {
    const [otp, setOtp] = useState(["", "", "", ""])
    const inputRef = useRef([])
    const enterOtp = (e, index) => {
        if (index < 3) {
            inputRef.current[index + 1].focus()
        }
        setOtp([...otp.map((data, i) =>
            index === i ? e.target.value : data)])
    }
    const [successMessage, setSuccessMessage] = useState(false)
    const handleBack = (e, index) => {
        if (e.key === 'Backspace' &&
            !otp[index]
            && inputRef.current[index - 1]) {
            setOtp([...otp.map((data, i) =>
                index - 1 === i ? "" : data)])
            inputRef.current[index - 1].focus();
            inputRef.current[index].blur();
        }
    }
    const submit = () => {
        const checkotp = otp.filter(e => e != "")
        if (checkotp.length == 4) {
            setSuccessMessage(`OTP is ${otp.toString()
                .replaceAll(",", "")}`)
        } else {
            setSuccessMessage(`Please enter a valid OTP`)
        }
    }
    return (
        <div>
            <h3>Enter OTP</h3>
            <div>
                {
                    otp.map((data, index) => {
                        return <input
                            type="text"
                            maxLength="1"
                            key={index}
                            value={data}
                            ref={ref =>
                                inputRef.current[index] = ref
                            }
                            onChange={(e) => {
                                enterOtp(e, index)
                            }}
                            onKeyDown={(e) => {
                                handleBack(e, index)
                            }}
                        />
                    })
                }
            </div>
            <button onClick={submit}>Submit</button>
            <br />
            {successMessage}
        </div>
    )
}
