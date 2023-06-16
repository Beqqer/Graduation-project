import React, { FC } from 'react'
import { IButton } from '../../Types';
import './button.scss';


export const Button = ({ callback, content, isActive}: IButton) => {
    return ( 
        <button
            type="button"
            className='btn'
            onClick={() => callback()}
            disabled={isActive}
        >
    {content}
        </button>
     );
}

export default Button