import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Popover, List, ListItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupIcon from '@mui/icons-material/Group';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const Header = ({ showSemester }) => { // Ajouter showSemester ici
    const [anchorElProgram, setAnchorElProgram] = useState(null);
    const [anchorElPersonnel, setAnchorElPersonnel] = useState(null);

    const handleProgramOpen = (event) => setAnchorElProgram(event.currentTarget);
    const handleProgramClose = () => setAnchorElProgram(null);

    const handlePersonnelOpen = (event) => setAnchorElPersonnel(event.currentTarget);
    const handlePersonnelClose = () => setAnchorElPersonnel(null);

    const handleScrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Element with ID "${sectionId}" not found.`);
        }
        handleProgramClose();
    };

    const popoverStyles = {
        backgroundColor: '#e0f7fa',
        padding: '10px',
        borderRadius: '8px',
        width: '200px',
    };

    return (
        <Box sx={{ marginTop: '20px' }}>
            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <img src="/images/logo.png" alt="Logo" style={{ height: '60px' }} />
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                        <Button sx={{ margin: '0 10px', color: 'black' }} onClick={() => handleScrollToSection('home')}>
                            <HomeIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Home
                        </Button>

                        <Button sx={{ margin: '0 10px', color: 'black' }} onClick={handleProgramOpen}>
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
                                sx: popoverStyles,
                            }}
                        >
                            <List>
                                <ListItem button onClick={() => { showSemester('semestre1'); handleProgramClose(); }}>Semestre 1</ListItem>
                                <ListItem button onClick={() => { showSemester('semestre2'); handleProgramClose(); }}>Semestre 2</ListItem>
                                <ListItem button onClick={() => { showSemester('semestre3'); handleProgramClose(); }}>Semestre 3</ListItem>
                                <ListItem button onClick={() => { showSemester('semestre4'); handleProgramClose(); }}>Semestre 4</ListItem>
                            </List>
                        </Popover>

                        <Button sx={{ margin: '0 10px', color: 'black' }} onClick={handlePersonnelOpen}>
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
                                sx: popoverStyles,
                            }}
                        >
                            <List>
                                <ListItem button onClick={handlePersonnelClose}>Chef de département</ListItem>
                                <ListItem button onClick={handlePersonnelClose}>Chef de laboratoire</ListItem>
                                <ListItem button onClick={handlePersonnelClose}>Responsable de la scolarité</ListItem>
                            </List>
                        </Popover>

                        <Button sx={{ margin: '0 10px', color: 'black' }}>
                            <WorkOutlineIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Opportunité
                        </Button>
                    </Box>

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
