import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Boton';
import { SwiperSlide, Swiper } from 'swiper/react';
import MovieCard from '../movie-card/MovieCard';


import './movie-button.scss';


import tmdbApi from '../../api/tmdbApi';


const SectionFooter = props => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type == 'similar') {

                response = await tmdbApi.similar(props.category, props.id);
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
            <div className='section_footer'>
                <div className="section_footer_tv">
                    <Link to="/tv">
                        <Button className="small">View TV</Button>
                    </Link>
                </div>
                <div className="section_footer_movie">
                    <Link to="/movie">
                        <Button className="small">View Movies</Button>
                    </Link>
                </div>
            </div>
        </>
    )

}

export default SectionFooter;
