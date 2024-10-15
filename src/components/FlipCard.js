import React, { useState } from "react";
import '../App.css';

function FlipCard({ front = null, back = null }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
            <div className="card-side front">
                <div className="card-content">{front || 'FRONT CARD'}</div>
                <div className="card-button-container">
                    <button className="flip-button" type="button" onClick={handleFlip}>More</button>
                </div>
            </div>
            <div className="card-side back">
                <div className="card-content">{back || 'BACK CARD'}</div>
                <div className="card-button-container">
                    <button className="flip-button" type="button" onClick={handleFlip}>More</button>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
