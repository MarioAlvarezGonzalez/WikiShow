//Importamos todas las librerias que necesitamos

import React, { useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Button from '../button/Button';

//Importamos el CSS del header
import './header.scss';
//Declaramos que queremos el logo a un ruta de la carpeta
import logo from '../../assets/Logo.JPG';

//Aqui hablamos de las diferentes categorais que se mostraran en el Header
const header_home = [
    {
        display: 'Home',
        path: '/'
    },
]
const header_movie = [
    {
        display: 'Movies',
        path: '/movie'
    }
]
const header_tv = [
    {
        display: 'TV',
        path: '/tv'
    }
]
const header_person = [
    {
        display: 'Actors',
        path: '/person'
    }
]


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
                    header_home.map((index_home) => (
                        <li key={index_home}>
                            <Button className="small">
                                <Link className='small_header' to={index_home.path}>
                                    <i className="bx bx-home"></i>
                                    {index_home.display}
                                </Link>
                            </Button>
                        </li>
                    ))
                }
                {
                    header_movie.map((index_movie) => (
                        <li key={index_movie}>
                            <Button className="small">
                                <Link className='small_header' to={index_movie.path}>
                                    <i className="bx bx-movie"></i>
                                    {index_movie.display}
                                </Link>
                            </Button>
                        </li>
                    ))
                }
                {
                    header_tv.map((index_tv) => (
                        <li key={index_tv}>
                            <Button className="small">
                                <Link className='small_header' to={index_tv.path}>
                                    <i className="bx bx-tv"></i>
                                    {index_tv.display}
                                </Link>
                            </Button>
                        </li>
                    )
                    )
                }
                {
                    header_person.map((index_person) => (
                        <li key={index_person}>
                            <Button className="small">
                                <Link className='small_header' to={index_person.path}>
                                    <i className="bx bx-user"></i>
                                    {index_person.display}
                                </Link>
                            </Button>
                        </li>
                    )
                    )
                }
            </ul>
        </div >
    );
}

export default Header;