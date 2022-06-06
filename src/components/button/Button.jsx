import React from 'react';
import './button.scss';

const Button = props => {
    return (
        <button
            className={`btn ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}> 
            {props.children}
        </button>
    );
}
export default Button;
