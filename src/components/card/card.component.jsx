import React from 'react';

import './card.styles.scss'

export const Card = ({monster}) => (

    <div className='card-container'>
        <img className='' src={`https://robohash.org/${monster.id}?set=set1`}/>
        <p>{monster.name}</p>
    </div>
)