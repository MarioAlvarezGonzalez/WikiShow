import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

import { category, movie, tv } from '../api/ConfigApi';

const Home = () => {
    return (
        <>
            <HeroSlide/>
            <div className="container">
                <div className="mb-3">
                    <div className="section__header mb-3">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <Button className="small">View All Movies</Button>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movie.popular}/>
                </div>

                <div className="mb-3">
                    <div className="section__header mb-3">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <Button className="small">View All Movies</Button>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movie.top_rated}/>
                </div>
                <div className="mb-3">
                    <div className="section__header mb-3">
                        <h2>Trending TV</h2>
                        <Link to="/tv">
                            <Button className="small">View All TV-Show</Button>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tv.popular}/>
                </div>
                <div className="mb-3">
                    <div className="section__header mb-3">
                        <h2>Top Rated TV</h2>
                        <Link to="/tv">
                            <Button className="small">View All TV-Show</Button>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tv.top_rated}/>
                </div>
            </div>
        </>
    );
}

export default Home;
