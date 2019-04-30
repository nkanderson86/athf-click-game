import React from 'react';

const Card = (props) => {
    return (
        <div className='col s4 m3'>
            <div className={`card hoverable`}>
                <div className='card-image'>
                    <img id="card-img" style={{ height: 200, width: 200, margin: 6.5 }} src={props.image} alt={props.id} />
                </div>
            </div>
        </div>
    );
};

export default Card;