import AxiosUser from "./AxiosUser";

export const category = {
    movie: 'movie',
    tv: 'tv',
    person : 'person'
}

export const movie = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tv = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'

}
export const person = {
    popular: 'popular',
    movie_credits: 'movie_credits'
}

const ConfigApi = {
    getMoviesList: (category, params) => {
        const url = 'movie/' + movie[category];
        return AxiosUser.get(url, params);
    },
    getTvList: (category, params) => {
        const url = 'tv/' + tv[category];
        return AxiosUser.get(url, params);
    },
    getPersonList: (category, params) => {
        const url = 'person/' + person[category];
        return AxiosUser.get(url, params);
    },
    getVideos: (type, id) => {
        const url = category[type] + '/' + id + '/videos';
        return AxiosUser.get(url, {params: {}});
    },
    
    search: (type, params) => {
        const url = 'search/' + category[type];
        return AxiosUser.get(url, params);
    },
    type: (type, id, params) => {
        const url = category[type] + '/' + id;
        return AxiosUser.get(url, params);
    },
    credits: (type, id) => {
        const url = category[type] + '/' + id + '/credits';
        return AxiosUser.get(url, {params: {}});
    },
    
    similar: (type, id) => {
        const url = category[type] + '/' + id + '/similar';
        return AxiosUser.get(url, {params: {}});
    }
   
}

export default ConfigApi;