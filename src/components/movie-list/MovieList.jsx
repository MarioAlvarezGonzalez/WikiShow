import React, { useState, useEffect } from 'react';

import './movie-list.scss';

import { SwiperSlide, Swiper } from 'swiper/react';

import ConfigApi, { category } from '../../api/ConfigApi';

import MovieCard from '../movie-card/MovieCard';

const MovieList = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await ConfigApi.getMoviesList(props.type, { params });
                        break;
                    default:
                        response = await ConfigApi.getTvList(props.type, { params });

                }
            } else {
                response = await ConfigApi.similar(props.category, props.id);
            }
            setItems(response.results);
        }
        getList();
    }, []);

    return (
        <>
            <div className="movie-list">
                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={'auto'}
                >
                    {
                        items.map((item, i) => (
                            <SwiperSlide key={i}>
                                <MovieCard item={item} category={props.category} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    );
}



export default MovieList;
