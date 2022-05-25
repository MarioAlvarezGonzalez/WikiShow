import axios from "axios";
import query from "query-string";

import AccessApi from "./AccessApi";

const AxiosUser = axios.create({
  baseURL: 
    (
      AccessApi.link
    ),
  headers: 
    {
    "Content-Type": "application/json",
    },
  paramsSerializer: (params) =>
    query.stringify({ ...params, api_key: AccessApi.key })
})

AxiosUser.interceptors.request.use(
    (async (config) => config)
)
AxiosUser.interceptors.response.use((response) => {
    return response.data;
})

export default AxiosUser;
