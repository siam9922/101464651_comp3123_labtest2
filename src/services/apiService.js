import axios from 'axios';

const API_KEY = '27a6739715e1aa47d1c149c72638f430';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchForecast = async (city) => {
    const response = await axios.get(BASE_URL, {
        params: {
            q: city,
            units: 'metric',
            appid: API_KEY,
        },
    });
    return response.data;
};
