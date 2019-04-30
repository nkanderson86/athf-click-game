import React from 'react';
import "./Card.css"

const Card = (props) => {
    return (
        <div className='col s6 m4 l3'>
            <div className={`card hoverable center-align`}>
                <img
                    className="click-image"
                    style={{ height: 200, width: 150, margin: 6.5 }}
                    src={props.image}
                    alt={props.id}
                    id={props.id}
                    onClick={props.onClick}

                />
            </div>
        </div>
    );
};

export default Card;