import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import ConfigApi from '../../api/ConfigApi';
import ImagesApi from '../../api/ImagesApi';

const ParticipantsList = props => {

    const {category} = useParams();
    const [participants, setparticipants] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const result = await ConfigApi.credits(category, props.id);
            setparticipants(result.cast.slice(0, 7));
        }
        getCredits();
    }, [category, props.id]);
    return (
        <div className="participants">
            {
                participants.map((item, imagen) => (
                    <div key={imagen} className="participants__item">
                        <div className="participants__item__img" style={{backgroundImage: `url(${ImagesApi.w500(item.profile_path || item.poster_path || item.backdrop_path )})`}}/>
                        <p className="participants__item__name">{item.title || item.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default ParticipantsList;
