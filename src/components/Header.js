import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Popover, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupIcon from '@mui/icons-material/Group';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const Header = () => {
  const [anchorElPersonnel, setAnchorElPersonnel] = useState(null);

  // Ouvre le Popover pour "Personnel"
  const handlePersonnelOpen = (event) => {
    setAnchorElPersonnel(event.currentTarget);
  };

  // Ferme le Popover pour "Personnel"
  const handlePersonnelClose = () => {
    setAnchorElPersonnel(null);
  };

  // Vérifie si le Popover pour "Personnel" est ouvert
  const openPersonnel = Boolean(anchorElPersonnel);

  return (
    <Box sx={{ marginTop: '20px' }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <img src="/images/logo.png" alt="Logo" style={{ height: '60px' }} />
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <Button sx={{ margin: '0 10px', color: 'black' }} component={Link} to="/">
              <HomeIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
              Home
            </Button>

            <Button sx={{ margin: '0 10px', color: 'black' }} component={Link} to="/programme">
              <MenuBookIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
              Programme
            </Button>

            {/* Bouton Personnel avec Popover */}
            <Button
              sx={{ margin: '0 10px', color: 'black' }}
              onClick={handlePersonnelOpen}
            >
              <GroupIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
              Soutien Professionnel
            </Button>

            {/* Popover pour afficher le menu déroulant de Personnel */}
            <Popover
              open={openPersonnel}
              anchorEl={anchorElPersonnel}
              onClose={handlePersonnelClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Couche blanche
                  borderRadius: '4px', // Ajoute un léger arrondi
                  overflow: 'hidden', // Pour cacher les débordements
                }}
              >
                {/* Couche bleue transparente */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 143, 191, 0.2)', // Couleur bleue transparente
                    zIndex: 1,
                  }}
                />
                
                <List sx={{ padding: 0, position: 'relative', zIndex: 2 }}>
                
                  {/* Lien externe vers Coursera */}
                  <ListItem
                    button
                    component="a"
                    href="https://www.coursera.org"
                    target="_blank" // Ouvre dans un nouvel onglet
                    rel="noopener noreferrer"
                    sx={{
                      color: 'rgba(70,130,180)', // Couleur gris pour les choix
                      '&:hover': {
                        color: '#008fbf', // Bleu lors du survol
                        backgroundColor: 'rgba(0, 0, 255, 0.1)', // Couleur bleu clair au survol
                      },
                    }}
                  >
                    Coursera
                  </ListItem>
                  {/* Lien externe vers Indeed */}
                  <ListItem
                    button
                    component="a"
                    href="https://www.indeed.com"
                    target="_blank" // Ouvre dans un nouvel onglet
                    rel="noopener noreferrer"
                    sx={{
                      color: 'rgba(70,130,180)', // Couleur gris pour les choix
                      '&:hover': {
                        color: '#008fbf', // Bleu lors du survol
                        backgroundColor: 'rgba(0, 0, 255, 0.1)', // Couleur bleu clair au survol
                      },
                    }}
                  >
                    Indeed
                  </ListItem>
                  {/* Lien externe vers LinkedIn */}
                  <ListItem
                    button
                    component="a"
                    href="https://www.linkedin.com"
                    target="_blank" // Ouvre dans un nouvel onglet
                    rel="noopener noreferrer"
                    sx={{
                      color: 'rgba(70,130,180)', // Couleur gris pour les choix
                      '&:hover': {
                        color: '#008fbf', // Bleu lors du survol
                        backgroundColor: 'rgba(0, 0, 255, 0.1)', // Couleur bleu clair au survol
                      },
                    }}
                  >
                    LinkedIn
                  </ListItem>
                  <ListItem
                    button
                    component="a" // Utiliser 'a' pour ouvrir un lien externe
                    href="https://www.edx.org" // Lien vers edX
                    target="_blank" // Ouvrir dans un nouvel onglet
                    sx={{
                      color: 'rgba(70,130,180)', // Couleur gris pour les choix
                      '&:hover': {
                        color: '#008fbf', // Bleu lors du survol
                        backgroundColor: 'rgba(0, 0, 255, 0.1)', // Couleur bleu clair au survol
                      },
                    }}
                  >
                    edX
                  </ListItem>
                </List>
              </Box>
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
