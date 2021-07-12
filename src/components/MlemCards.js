import React, { useState } from 'react'
import TinderCard from "react-tinder-card"
import "../css/MlemCard.css"

function MlemCards() {
    const [profile, setProfile] = useState([
        {
            name: "Apollo",
            url: "https://pomskynederland.com/en/wp-content/uploads/sites/3/2021/03/De-Pomsky-e1614801584830-1.jpeg"
        },
        {
            name: "Charlie",
            url: "https://mydogsinfo.com/wp-content/uploads/2020/05/cockapoo-e1574194055471.jpg"
        },
        {
            name: "Sammy",
            url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234019/Bulldog-standing-in-the-grass.jpg"
        }
    ]);

    return (
        <div className="mlem__cards">
            <div className="card__container">
                {profile.map((pet) => (
                    <TinderCard
                        className="swipe"
                        key={pet.name}
                        preventSwipe={["up", "down"]}
                    // onSwipe={(dir) => swiped(dir, pet.name)}
                    // onCardLeftScreen={() => outOfFrame(pet.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${pet.url})` }}
                            className="card"
                        >
                            <h3>{pet.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default MlemCards
