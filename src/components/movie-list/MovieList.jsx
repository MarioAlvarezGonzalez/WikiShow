import React, { useState, useEffect } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';

import ConfigApi, { category } from '../../api/ConfigApi';
import MovieCard from '../movie-card/MovieCard';

import './movie-list.scss';

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
            <Swiper
                grabCursor={true}
                spaceBetween={9}
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
        </>
    );
}



export default MovieList;
