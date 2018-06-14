import React from 'react';

function Tile(props) {
    return (
        <div className="col-lg-3 col-md-4">
            <div className="img-container">
                 <img src={props.skillImg} alt={props.skillName} />
            </div>
            <div className="skill-name">
                 {props.skillName}
            </div>
            <div className="skill-writeup">
                 {props.skillDescription}
            </div>
        </div>
    )
}

export default Tile