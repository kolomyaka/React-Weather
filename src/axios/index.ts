import axios from "axios";

// Создаем baseURL, который одиннаковый при всех запросах
const api = axios.create({
    baseURL : process.env.REACT_APP_API_URL,
});

// Перехватываем реквест при отправке (middleWare) 
api.interceptors.request.use(config => {
    // При перехвате изменяем конфиг, добавляем в запросе наш API_KEY и возвращаем config
    config.url = config.url + '&appid=' + process.env.REACT_APP_API_KEY;
    return config;
});

export default api;
