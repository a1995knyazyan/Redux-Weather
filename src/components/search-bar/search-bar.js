import './search-bar.css';
import {useDispatch} from "react-redux";
import {searchWeather} from "../../features/weather";
import {getWeatherByCity} from "../../http/axios";
import {useState} from "react";

function SearchBar () {

    const [keyword, setKeyword] = useState('');

    const dispatch = useDispatch();

    function searchEventHandler (keyword) {
        getWeatherByCity(keyword).then((data) => {
            console.log(data);
            dispatch(searchWeather.search(data))
        })
        console.log(keyword);
    }

    return (
        <div className="search-main-container">
            <div>
                <input id="searchInput" type="text"/>
                <button onClick={searchEventHandler}>Search City</button>
            </div>
        </div>
    )
}

export default SearchBar;
