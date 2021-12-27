import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.scss';


export const CardList = ({monsters}) => {

    return (
        <div className='card-list'>
             {
                 monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
                 ))    
             }
        </div>
    )
}
  