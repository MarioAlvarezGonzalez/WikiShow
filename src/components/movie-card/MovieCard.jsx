import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/Button';
import { category } from '../../api/ConfigApi';
import ImagesApi from '../../api/ImagesApi';

import './movie-card.scss';

const MovieCard = props => {

    const item = props.item; //Cargamos todos las propiedas del item en la variable "item"

    const link = '/' + category[props.category] + '/' + item.id; //Creamos el link para la categoria y el id del objeto movie/33232

    const bg_show = ImagesApi.w500(item.poster_path); //Imagen del recuadro con el poster 
    const bg_person = ImagesApi.w500(item.profile_path); //Imagen de fondo con la imagen de perfil

    return (
        /* Creamos el link, en las lineas posteriores creamos divs con cada background, le añadimos el boton de play de boxicons
        y crearemos un h2 con el titulo del movie o el nombre de la persona */
        <Link to={link}>

            <div className="movie-card" style={{ backgroundImage: `url(${bg_show})` }}>
                <div className="person-card" style={{ backgroundImage: `url(${bg_person})` }}>
                    <h1 className="vote-average">{item.vote_average}</h1>
                    <Button>
                        <i className="bx bx-search"></i><p className='movie-over'>{item.overview || item.name || item.title || item.tagline }</p>
                    </Button>
                </div>
            </div>
            <h2 className='name-card'>{item.title || item.name}</h2>
        </Link>
    );
}
export default MovieCard;
