import React from 'react'
import "../css/Chats.css"
import Chat from "../components/Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Apollo"
                message="Hey! How are you ?"
                timestamp="25 seconds ago"
                profilePic="https://pomskynederland.com/en/wp-content/uploads/sites/3/2021/03/De-Pomsky-e1614801584830-1.jpeg"
            />
            <Chat
                name="Mr. Beans"
                message="Whats up ?"
                timestamp="3 minutes ago"
                profilePic="https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s135nzd9yxg8imd.jpg"
            />
            <Chat
                name="Doge"
                message="Have you invested ?!?"
                timestamp="37 minutes ago"
                profilePic="https://myfirstshiba.com/wp-content/uploads/2016/05/kabosu01.jpg"
            />
            <Chat
                name="Charlie"
                message="Lets go to the park Sunday."
                timestamp="5 hours ago"
                profilePic="https://mydogsinfo.com/wp-content/uploads/2020/05/cockapoo-e1574194055471.jpg"
            />
        </div>
    )
}

export default Chats
