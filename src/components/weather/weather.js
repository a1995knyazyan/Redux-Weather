import {getCurrentLocationWeather} from "../../http/axios";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {searchWeather} from "../../features/weather";

function WeatherList () {
    const weather = useSelector((state) => state.weather);
    const dispatch = useDispatch();

    useEffect(() => {
        getCurrentLocationWeather("Yerevan").then((data) => dispatch(searchWeather.search({value: data})))
    });

    return (
        <div>
            <div>
                {/*TODO render list*/}
                {/*{weather.value}*/}
            </div>
        </div>
    )
}

export default WeatherList;
