import React from "react";
import '../App.css';

function FlipCard({front=null, back=null}) {
    return (
        <div className="card">
            <div className="card-side front">
                <div>{ front || 'FRONT CARD' }</div>
            </div>
            <div className="card-side back">
                <div>{ back || 'BACK CARD' }</div>
            </div>
        </div>
    );
}

export default FlipCard;
