import React from 'react';
import ErrorBoundary from "../error-boundary";
import Container from "../container";
import Header from "../header";
import Button from "../common/button";
import Title from "../title";

const App = () => {
    return (
        <ErrorBoundary>
            <Container>
                <Header/>
                <Title/>
            </Container>
        </ErrorBoundary>
    );
};

export default App;