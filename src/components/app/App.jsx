import React from 'react';
import ErrorBoundary from "../error-boundary";
import Container from "../container";
import Header from "../header";
import Title from "../title";
import WeatherToday from "../weather-today";
import WeatherForThreeDay from "../weather-for-three-day";
import {Provider} from "react-redux";
import store from "../../store";

const App = () => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <Container>
                    <Header/>
                    <Title/>
                    <WeatherToday/>
                    <WeatherForThreeDay/>
                </Container>
            </ErrorBoundary>
        </Provider>
    );
};

export default App;