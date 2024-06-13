import React, { useEffect, useRef, useState } from 'react'
import './chat.css'
export default function Chat() {
    const [messageList, setMessageList] = useState([])
    const [message, setMessage] = useState("")
    const chatWindowRef = useRef(null)
    useEffect(() => {
        document.title = "Chat Application";
        const chatbox = chatWindowRef.current;
        if (chatbox) {
            chatbox.scrollTop = chatbox.scrollHeight;
        }
    }, [messageList])
    return (
        <div>
            <h2>Simple Chat App</h2>
            <div className='chatbox' ref={chatWindowRef}>
                {
                    messageList.map((e, i) => {
                        return <div
                            className='message'
                            style={e.status == "outgoing"
                                ? { alignSelf: 'end' } :
                                { alignSelf: 'start' }
                            }
                            key={i}
                        >
                            {e.message}
                            <br />
                            <span>
                                {new Date().toTimeString().
                                    substring(0, 5)}
                            </span>
                        </div>
                    })
                }

            </div>
            <div className='flex'>
                <input
                    placeholder='Enter a message'
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    value={message}
                />
                <button
                    onClick={() => {
                        setMessageList([
                            ...messageList,
                            { message: message, status: "outgoing" }
                        ])
                        setMessage("")
                    }}
                >
                    <img src='./send.png' />
                </button>
            </div>
            <button
                onClick={() => {
                    setMessageList([
                        ...messageList,
                        {
                            message: "new incoming message",
                            status: "incoming"
                        }
                    ])
                }}
            >
                Receive message
            </button>
        </div>
    )
}
