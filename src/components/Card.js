import React from 'react';



const Card = (props) => {
    return (
        <div className='bg-light-green dib br4 pa3 ma2 grow bw2 shadow-3'>
            <img src={`https://robohash.org/${props.id}?150x150`} alt='' />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>

    )
}

export default Card;