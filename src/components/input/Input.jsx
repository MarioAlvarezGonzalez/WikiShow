import React from 'react';
import './input.scss';

const Input = props => {
    return (
        <input
            placeholder={props.placeholder} //Crearemos el place holder que aparecera antes de escribir el texto
            onChange={props.onChange ? (e) => props.onChange(e) : null} //Se crea el onchange para que una vez escriba busque
        />
    );
}

export default Input;
