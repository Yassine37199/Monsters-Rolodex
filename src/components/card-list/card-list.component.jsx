import React from 'react';

import './card-list.styles.scss';


export const CardList = (props) => {

    return (
        <div className='card-list'>
            {props.children}
        </div>
    )
}
  