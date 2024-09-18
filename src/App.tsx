import React from 'react';
import Header from './pages/header';
import Home from './pages/home';
import Footer from './pages/footer';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    );
};

export default App;
