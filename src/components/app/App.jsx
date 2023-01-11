import React from 'react';
import ErrorBoundary from "../error-boundary";
import Container from "../container";
import Header from "../header";
import Title from "../title";
import WeatherToday from "../weather-today";
import WeatherForThreeDay from "../weather-for-three-day/weather-for-three-day";

const App = () => {
    return (
        <ErrorBoundary>
            <Container>
                <Header/>
                <Title/>
                <WeatherToday/>
                <WeatherForThreeDay/>
            </Container>
        </ErrorBoundary>
    );
};

export default App;