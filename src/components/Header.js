import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
    return (
        <Box sx={{ marginTop: '20px' }}> {/* Espace en haut de la page */}
            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    {/* Logo à gauche */}
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <img src="/images/logo.png" alt="Logo" style={{ height: '100px' }} />
                    </Typography>

                    {/* Options au milieu, centrées avec espace entre les boutons */}
                     <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                        <Button sx={{ margin: '0 10px', color: 'black' }}>Home</Button>
                        <Button sx={{ margin: '0 10px', color: 'black' }}>Programme</Button>
                        <Button sx={{ margin: '0 10px', color: 'black' }}>Personnel</Button>
                        <Button sx={{ margin: '0 10px', color: 'black' }}>Opportunité</Button>
                    </Box>

                    {/* Bouton de connexion avec style personnalisé */}
                    <Button 
                        sx={{ 
                            margin: '0 35px',
                            backgroundColor: '#008fbf', 
                            color: 'white', // Couleur du texte
                            borderRadius: '20px', // Bord arrondi
                            width: '120px',
                            height :'40px',
                            '&:hover': {
                                backgroundColor: '#00c9f2', // Couleur de fond au survol
                            },
                        }}
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
