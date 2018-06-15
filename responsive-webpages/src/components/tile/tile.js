import React from 'react';
import './tile.css';

function Tile(props) {
    return (
        
       <div className="col-lg-3 col-md-4 col-sm-6">
           <div class="item">
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
        </div>
        
    
    )
}

export default Tile