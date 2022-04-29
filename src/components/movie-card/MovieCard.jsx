import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Boton';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const MovieCard = props => {

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
           
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
            <div className="person-card" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}>            
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            </div>
            <h3>{item.title || item.name}</h3>   
        </Link>
        
    );
 
}

export default MovieCard;
