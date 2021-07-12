import React, { useState } from 'react'
import "../css/ChatScreen.css"
import Avatar from "@material-ui/core/Avatar"

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: "Apollo",
            profilePic: "https://pomskynederland.com/en/wp-content/uploads/sites/3/2021/03/De-Pomsky-e1614801584830-1.jpeg",
            message: "Ruff !?!",
        },
        {
            name: "Apollo",
            profilePic: "https://pomskynederland.com/en/wp-content/uploads/sites/3/2021/03/De-Pomsky-e1614801584830-1.jpeg",
            message: "Hey! How are you ?",
        },
        {
            profilePic: "https://i.pinimg.com/originals/6c/78/13/6c78131d0374b86c3710c3ba6f5c3c66.jpg",
            message: "Hey buddy, Im great !",
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input, profilePic: "https://i.pinimg.com/originals/6c/78/13/6c78131d0374b86c3710c3ba6f5c3c66.jpg" }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__time">YOU MATCHED WITH APOLLO ON 7/13/2021</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__pic"
                            alt={message.name}
                            src={message.profilePic}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">

                        <p className="chatScreen__textUser">{message.message}</p>
                        <Avatar
                            className="chatScreen__pic"
                            alt={message.name}
                            src={message.profilePic}
                        />
                    </div>
                )

            ))}

            <form className="chatScreen__input">
                <input value={input} onChange={(e) => setInput(e.target.value)} className="chatScreen__inputFeild" type="text" placeholder="Type a message..." />
                <button type="submit" onClick={handleSend} className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
