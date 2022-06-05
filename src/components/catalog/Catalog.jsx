import React from 'react';
import { useParams } from 'react-router';

import PageHeader from '../page-header/PageHeader';
import MovieGrid from '../movie-grid/MovieGrid';

const Catalog = () => {

    const { category } = useParams();

    return (
        <>
            <PageHeader>
            </PageHeader>
            <div className="container">
                <div className="section_catalog">
                    <MovieGrid category={category}/>
                </div>
            </div>
        </>
    );
}

export default Catalog;
