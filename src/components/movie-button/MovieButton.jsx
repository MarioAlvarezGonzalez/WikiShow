import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { SwiperSlide, Swiper } from 'swiper/react';
import MovieCard from '../movie-card/MovieCard';


import './movie-button.scss';


import ConfigApi from '../../api/ConfigApi';


const SectionFooter = props => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;

            if (props.type === 'similar') {

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
            <div className='section_footer'>
                <div className="section_footer_movie">
                    <Link to="/movie">
                        <Button className="small">Go to Movies</Button>
                    </Link>
                </div>
                <div className="section_footer_tv">
                    <Link to="/tv">
                        <Button className="small">Go to Tv</Button>
                    </Link>
                </div>
            </div>
        </>
    )

}

export default SectionFooter;
