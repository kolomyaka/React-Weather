import axios from "axios";

const secondApi = axios.create({
    baseURL : process.env.REACT_APP_API_URL2,
});

secondApi.interceptors.request.use(config => {
    config.url = config.url + 'key=' + process.env.REACT_APP_API_KEY2; 
    return config;
})

export default secondApi;