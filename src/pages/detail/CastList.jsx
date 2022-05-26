import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import ConfigApi from '../../api/ConfigApi';
import ImagesApi from '../../api/ImagesApi';

const CastList = props => {

    const {category} = useParams();


    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await ConfigApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 8));
        }
        getCredits();
    }, [category, props.id]);
    return (
        <div className="casts">
            {
                casts.map((item, imagen) => (
                    <div key={imagen} className="casts__item">
                        <div className="casts__item__img" style={{backgroundImage: `url(${ImagesApi.w500(item.profile_path || item.poster_path || item.backdrop_path )})`}}></div>
                        <p className="casts__item__name">{item.title || item.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default CastList;
