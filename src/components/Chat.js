import React from 'react'
import "../css/Chat.css"
import Avatar from "@material-ui/core/Avatar"
import { Link } from "react-router-dom"

function Chat({ name, message, profilePic, timestamp }) {
    return (
        <Link to={`/chat/${name}`}>
            <div className="chat">
                <Avatar className="chat__img" alt={name} src={profilePic} />
                <div className="chat__details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="chat__time">{timestamp}</p>
            </div>
        </Link>

    )
}

export default Chat
