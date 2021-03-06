import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router';

import './movie-grid.scss';

import MovieCard from '../movie-card/MovieCard';
import Button from '../button/Button';
import Input from '../input/Input'

import ConfigApi, { category, movieType, tvType, personType } from '../../api/ConfigApi';

const MovieGrid = props => {

    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = "";
            if (keyword === undefined) {
                const params = {};
                switch (props.category) {
                    case category.movie:
                        response = await ConfigApi.getMoviesList(movieType.upcoming, { params });
                        break;
                    case category.tv:
                        response = await ConfigApi.getTvList(tvType.popular, { params });
                        break;
                    default:
                    case category.person:
                        response = await ConfigApi.getPersonList(personType.popular, { params });
                }
            } else {
                const params = {
                    query: keyword
                }
                response = await ConfigApi.search(props.category, { params });
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [props.category, keyword]);

    const LoadMore = async () => {
        let response = "";
        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            switch (props.category) {
                case category.movie:
                    response = await ConfigApi.getMoviesList(movieType.upcoming, { params });
                    break;
                case category.tv:
                    response = await ConfigApi.getTvList(tvType.popular, { params });
                    break;
                default:
                case category.person:
                    response = await ConfigApi.getPersonList(personType.popular, { params });

            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await ConfigApi.search(props.category, { params });
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }

    return (
        <>
            <div className="section_grid">
                <MovieSearch category={props.category} keyword={keyword} />
            </div>
            <div className="movie_grid">
                {
                    items.map((item, i) => <MovieCard category={props.category} item={item} key={i} />)
                }
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid_more">
                        <Button className="small" onClick={LoadMore}>Load more</Button>
                    </div>
                ) : ""
            }
        </>
    );
}

const MovieSearch = props => {

    const history = useHistory();
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const search = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                history.push(`/${category[props.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, history]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 1) {
                search();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, search]);

    return (
        <div className="movie_search">
            <Input
                type="text"
                placeholder="Write here to search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className="small" onClick={search}>
                 <i className="bx bx-search"></i>
            </Button>
        </div>
    )
}

export default MovieGrid;
