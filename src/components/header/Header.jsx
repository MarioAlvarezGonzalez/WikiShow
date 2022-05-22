//Importamos todas las librerias que necesitamos

import React, { useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';


//Importamos el CSS del header
import './header.scss';
//Declaramos que queremos el logo a un ruta de la carpeta
import logo from '../../assets/Logo.JPG';

//Aqui hablamos de las diferentes categorais que se mostraran en el Header
const header = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV-Show',
        path: '/tv'
    },
    {
        display: 'Actors',
        path: '/person'
    },
    
];

const Header = () => {

    const headerRef = useRef(null); 
    //Con esto pillamos la referencia al Header para posteriormente llamarlo a modificar

    //El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. 
    //En caso contrario devuelve -1.

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.documentElement.scrollTop > 10) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">WiKiSHOW</Link>
                </div>
            </div>  
                <ul className="header__nav">
                    {
                        header.map((index) => (
                            <li key={index}>
                                <Link to={index.path}>
                                    {index.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
        </div>
    );
}

export default Header;