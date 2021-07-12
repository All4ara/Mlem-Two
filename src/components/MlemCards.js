import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import database from "../firebase";
import "../css/MlemCard.css";

function MlemCards() {
    const [profile, setProfile] = useState([]);

    useEffect(() => {

        // this is where the code runs...
        const unsubscribe = database
            .collection('pets')
            .onSnapshot(snapshot =>
                setProfile(snapshot.docs.map(doc => doc.data()))
            );

        return () => {
            // this is the cleanup...
            unsubscribe();
        };
    }, []);


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
