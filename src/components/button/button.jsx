import React from 'react';

import './button.scss';

const Button = props => {
    return (
        <button
            className={`btn ${props.className}`} //Con esta propiedad hacemos todos los btn que existen, tengan su bootrap y los colocamos con children
            onClick={props.onClick ? () => props.onClick() : null} //Con esto llamamos a la propiedad Onclick, si no esta clickead sera null, y si esta pues realizara la propiedad onClik
        >
            {props.children}
        </button>
    );
}
export default Button;
