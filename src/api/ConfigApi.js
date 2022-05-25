import AxiosUser from "./AxiosUser";

export const category = {
    movie: 'movie',
    tv: 'tv',
    person : 'person'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'

}
export const personType = {
    popular: 'popular',
    movie_credits: 'movie_credits'
}

const ConfigApi = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return AxiosUser.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return AxiosUser.get(url, params);
    },
    getPersonList: (type, params) => {
        const url = 'person/' + personType[type];
        return AxiosUser.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return AxiosUser.get(url, {params: {}});
    },
    
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return AxiosUser.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return AxiosUser.get(url, params);
    },
    

    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return AxiosUser.get(url, {params: {}});
    },
    
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return AxiosUser.get(url, {params: {}});
    }
   
}

export default ConfigApi;