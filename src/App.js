import './App.css';
import {configureStore} from '@reduxjs/toolkit';
import {Route, Router } from "react-router-dom";
import WeatherList from "./components/weather/weather";
import SearchBar from "./components/search-bar/search-bar";
import weatherSlice from "./features/weather";
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {
        weather: weatherSlice
    }
})

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <header className="App-header">
                  <SearchBar />
              </header>
              <main>
                  <div>
                      {/*<Router>*/}
                      {/*    <Route path='/' component={WeatherList}>*/}
                      {/*        <Route path='/current' component={WeatherList}/>*/}
                      {/*    </Route>*/}
                      {/*</Router>*/}
                      <WeatherList />
                  </div>
              </main>
          </div>
      </Provider>
  );
}

export default App;
