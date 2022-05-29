import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/Button';
import HeroSlide from '../hero-slide/HeroSlide';
import MovieList from '../movie-list/MovieList';

import { category, movieType, tvType } from '../../api/ConfigApi';

import './home.scss'

const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className="container">
                <div className="mb-3">
                    <div className="section__header mb-3">
                        <h2 className='first_category'>Trending Movies</h2>
                        <MovieList category={category.movie} type={movieType.popular} />
                        <Link to="/movie">
                            <Button className="small-home-trending-movie">View All Movies</Button>
                        </Link>
                    </div>
                </div>

                <div className="mb-3">
                    <div className="section__header mb-3">
                        <h2 className='second_category'>Top Rated Movies</h2>
                        <MovieList category={category.movie} type={movieType.top_rated} />
                        <Link to="/movie">
                            <Button className="small-home-rated-movies">View All Movies</Button>
                        </Link>

                    </div>
                </div>
                <div className="mb-3">
                    <div className="section__header mb-3">
                        <h2 className='third_category'>Trending TV</h2>
                        <MovieList category={category.tv} type={tvType.popular} />
                        <Link to="/tv">
                            <Button className="small-home-trending-tv">View All TV-Show</Button>
                        </Link>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="section__header mb-3">
                        <h2 className='fourth_category'>Top Rated TV</h2>
                        <MovieList category={category.tv} type={tvType.top_rated} />
                        <Link to="/tv">
                            <Button className="small-home-rated-tv">View All TV-Show</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
