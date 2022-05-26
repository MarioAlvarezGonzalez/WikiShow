import axios from 'axios';
import queryString from 'query-string';

import AccessApi from './AccessApi';

const AxiosUser = axios.create({
    baseURL: AccessApi.link,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: AccessApi.key})
});

AxiosUser.interceptors.request.use(async (config) => config);

AxiosUser.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
    }
);

export default AxiosUser;