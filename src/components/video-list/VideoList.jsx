import React, { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router';
import './video-list.scss';

import tmdbApi from '../../api/ConfigApi';

const VideoList = props => {

    const { category } = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await tmdbApi.getVideos(category, props.id);
            setVideos(res.results.slice(0, 4));
        }
        getVideos();
    }, [category, props.id]);

    return (
        <>
            {
                videos.map((item, i) => (
                    <Video key={i} item={item} />
                ))
            }
        </>
    );
}

const Video = props => {

    const item = props.item;

    const iframeRef = useRef(null);

    //Ensayo y error del tañamo del video
    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 7.6 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <div className="video__title">
                <h2 className='name-trailer'>{item.title || item.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}

export default VideoList;
