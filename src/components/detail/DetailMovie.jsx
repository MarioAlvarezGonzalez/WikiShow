import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ConfigApi from '../../api/ConfigApi';
import ImagesApi from '../../api/ImagesApi';

import ParticipantsList from '../participants-list/ParticipantsList';
import VideoList from '../video-list/VideoList';
import MovieButton from '../movie-button/MovieButton';

import './detail.scss';

const DetailMovie = () => {

    const { category, id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await ConfigApi.detail(category, id, { params: {} });
            setItem(response);
        }
        getDetail();
    }, [category, id]);

    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{ backgroundImage: `url(${ImagesApi.original(item.backdrop_path || item.poster_path || item.profile_path)})` }}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{ backgroundImage: `url(${ImagesApi.original(item.poster_path || item.backdrop_path || item.profile_path)})` }}></div>
                            </div>
                            
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                <div className='homepage'>{item.homepage}</div>
                                <div className="genres">
                                    {

                                        item.genres && item.genres.slice(0, 6).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))

                                    }
                                </div>
                                <div className='tag_line'>
                                    <h3 className="tag_line_detail">{item.tagline}</h3>
                                </div>
                                <div className='overview'>
                                    <p className="overview_detail"> <h2>General view</h2> {item.overview || item.biography}</p>
                                </div>
                                <div className="cast">
                                    <div className="section__header">
                                        <h2 className='participation'>Participation</h2>
                                    </div>
                                    <ParticipantsList id={item.id} />
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="section_movie">
                                <VideoList id={item.id} />
                            </div>
                            <div className="section_similar">
                                <MovieButton category={category} type="similar" id={item.id} />
                            </div>

                        </div>
                    </>
                )
            }
        </>
    );
}

export default DetailMovie;
