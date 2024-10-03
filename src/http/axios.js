import axios from "axios";

const BASE_URL = `https://api.openweathermap.org/`;
const API_KEY = 'cdae898a77a820c43a50650fa56fe309';

export const getCurrentLocationWeather = (currentCity) => {
    return axios({
        method: 'get',
        url: BASE_URL + `data/2.5/weather?q=${currentCity}&appid=${API_KEY}`,
    })
}

export const getWeatherByCity = (cityName) => {
    return axios({
        method: 'get',
        url: BASE_URL + `data/2.5/weather?q=${cityName}&appid=${API_KEY}`,
    })
}