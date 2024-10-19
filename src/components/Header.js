import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Popover, List, ListItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupIcon from '@mui/icons-material/Group';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const Header = () => {
    const [anchorElProgram, setAnchorElProgram] = useState(null);
    const [anchorElPersonnel, setAnchorElPersonnel] = useState(null);

    // Gestion de l'ouverture du menu "Programme"
    const handleProgramOpen = (event) => {
        setAnchorElProgram(event.currentTarget);
    };

    const handleProgramClose = () => {
        setAnchorElProgram(null);
    };

    // Gestion de l'ouverture du menu "Personnel"
    const handlePersonnelOpen = (event) => {
        setAnchorElPersonnel(event.currentTarget);
    };

    const handlePersonnelClose = () => {
        setAnchorElPersonnel(null);
    };

    const popoverStyles = {
        backgroundColor: '#e0f7fa', // Couleur de fond
        padding: '10px',
        borderRadius: '8px',
        width: '300px', // Largeur uniforme pour tous les Popover
    };

    return (
        <Box sx={{ marginTop: '20px' }}>
            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    {/* Logo à gauche */}
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <img src="/images/logo.png" alt="Logo" style={{ height: '100px' }} />
                    </Typography>

                    {/* Options au milieu, centrées avec espace entre les boutons */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                        {/* Home avec icône en gris transparent */}
                        <Button sx={{ margin: '0 10px', color: 'black' }}>
                            <HomeIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Home
                        </Button>

                        {/* Programme avec icône en gris transparent */}
                        <Button
                            sx={{ margin: '0 10px', color: 'black' }}
                            onClick={handleProgramOpen}
                        >
                            <MenuBookIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Programme
                        </Button>
                        <Popover
                            open={Boolean(anchorElProgram)}
                            anchorEl={anchorElProgram}
                            onClose={handleProgramClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            PaperProps={{
                                sx: popoverStyles
                            }}
                        >
                            <List>
                                <ListItem button onClick={handleProgramClose}>Semestre 1</ListItem>
                                <ListItem button onClick={handleProgramClose}>Semestre 2</ListItem>
                                <ListItem button onClick={handleProgramClose}>Semestre 3</ListItem>
                                <ListItem button onClick={handleProgramClose}>Semestre 4</ListItem>
                            </List>
                        </Popover>

                        {/* Personnel avec icône en gris transparent */}
                        <Button
                            sx={{ margin: '0 10px', color: 'black' }}
                            onClick={handlePersonnelOpen}
                        >
                            <GroupIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Personnel
                        </Button>
                        <Popover
                            open={Boolean(anchorElPersonnel)}
                            anchorEl={anchorElPersonnel}
                            onClose={handlePersonnelClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            PaperProps={{
                                sx: popoverStyles
                            }}
                        >
                            <List>
                                <ListItem button onClick={handlePersonnelClose}>Chef de département</ListItem>
                                <ListItem button onClick={handlePersonnelClose}>Chef de laboratoire</ListItem>
                                <ListItem button onClick={handlePersonnelClose}>Responsable de la scolarité</ListItem>
                            </List>
                        </Popover>

                        {/* Opportunité avec icône en gris transparent */}
                        <Button sx={{ margin: '0 10px', color: 'black' }}>
                            <WorkOutlineIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Opportunité
                        </Button>
                    </Box>

                    {/* Bouton de connexion avec style personnalisé */}
                    <Button
                        sx={{
                            margin: '0 35px',
                            backgroundColor: '#008fbf',
                            color: 'white',
                            borderRadius: '20px',
                            width: '120px',
                            height: '40px',
                            '&:hover': {
                                backgroundColor: '#00c9f2',
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
