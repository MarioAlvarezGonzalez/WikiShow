import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const MovieCard = props => {

    const item  = props.item; //Cargamos todos las propiedas del item en la variable "item"

    const link = '/' + category[props.category] + '/' + item.id; //Creamos el link para la categoria y el id del objeto movie/33232

    const bg_show = apiConfig.w500Image(item.poster_path); //Imagen del recuadro con el poster 
    const bg_person = apiConfig.w500Image(item.profile_path); //Imagen de fondo con la imagen de perfil

    return (
        /* Creamos el link, en las lineas posteriores creamos divs con cada background, le añadimos el boton de play de boxicons
        y crearemos un h2 con el titulo del show o el nombre de la persona */
        <Link to={link}>
           
            <div className="movie-card" style={{backgroundImage: `url(${bg_show})`}}>
            <div className="person-card" style={{backgroundImage: `url(${bg_person})`}}>            
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            </div>
            <h2 className='name-card'>{item.title || item.name}</h2> 
        </Link>
    );
}

export default MovieCard;
