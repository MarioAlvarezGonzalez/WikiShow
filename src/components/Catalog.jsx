import React from 'react';
import { useParams } from 'react-router';

import PageHeader from '../components/page-header/PageHeader';
import MovieGrid from '../components/movie-grid/MovieGrid';

const Catalog = () => {

    const { category } = useParams();

    return (
        <>
            <PageHeader>
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category}/>
                </div>
            </div>
        </>
    );
}

export default Catalog;
