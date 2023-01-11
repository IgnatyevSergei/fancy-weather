import React from 'react';
import ErrorBoundary from "../error-boundary";
import Container from "../container";
import Header from "../header";
import Title from "../title";
import WeatherToday from "../weather-today";

const App = () => {
    return (
        <ErrorBoundary>
            <Container>
                <Header/>
                <Title/>
                <WeatherToday/>
            </Container>
        </ErrorBoundary>
    );
};

export default App;