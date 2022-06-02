import React from 'react';
import './button.scss';

const Button = props => {
    return (
        <button
            className={`btn ${props.className}`} //Con esta propiedad hacemos todos los btn que existen, tengan su bootrap y los colocamos con children
            onClick={props.onClick ? () => props.onClick() : null}> 
            {props.children}
        </button>
    );
}
export default Button;
