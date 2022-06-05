import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import ConfigApi from '../../api/ConfigApi';

import './video-list.scss';

const VideoList = props => {

    const { category } = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await ConfigApi.getVideos(category, props.id);
            setVideos(res.results.slice(0, 4));
        }
        getVideos();
    }, [category, props.id]);

    return (
        <>
            {
                videos.map((video, index) => (
                    <Video key={index} video={video} />
                ))
            }
        </>
    );
}

const Video = props => {

    const video = props.video;

    return (
        <div className="video">
            <div className="video__title">
                <h2 className='name_trailer'>{video.title || video.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${video.key}`}
                title="name"
                width="100%"
                height="660px"
            ></iframe>
        </div>
    )
}
export default VideoList;
