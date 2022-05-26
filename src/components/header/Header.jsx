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

    const header = useRef(null);

    useEffect(() => {
        const vanish = () => {
            if (document.documentElement.scrollTop > 20) 
            {
                header.current.classList.add('vanish');
            } else {
                header.current.classList.remove('vanish');
            }
        }
        window.addEventListener('scroll', vanish);
        return () => {
            window.removeEventListener('scroll', vanish);
        };

    }, []);

    return (
       <div ref={header} className="header">
            <div className="header_container">
                <div className="logo">
                    <img src={logo}/>
                    <Link to="/">WikiShow</Link>
                </div>
            </div>
            <ul className="header_menu">
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