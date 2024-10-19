import React from 'react';
import Header from '../components/Header'; // Vérifiez si Header se trouve bien dans ../components
import Footer from '../components/Footer'; // Si Footer est dans le même dossier que Header
import { Container } from '@mui/material';
import WelcomeSection from '../components/WelcomeSection'; // Vérifiez également le chemin de WelcomeSection

const HomePage = () => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <WelcomeSection />
            <Footer />
        </Container>
    );
};

export default HomePage;
