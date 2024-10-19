import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const WelcomeSection = () => {
  const theme = useTheme(); // Pour obtenir le thème actuel

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Colonne pour les petits écrans, ligne pour les plus grands
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Texte à gauche */}
      <Box sx={{ flex: 1, paddingRight: { xs: '0', md: '2rem' } }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bienvenue 
        </Typography>
        <Typography variant="body1">
          Ce site est dédié aux étudiants du Master Ingénierie Informatique (M2I) à la Faculté des Sciences
          de l'Université Mohammed Premier d'Oujda. Ici, vous trouverez toutes les informations et ressources nécessaires
          pour réussir votre parcours académique.
        </Typography>
      </Box>

      {/* Image à droite */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="https://th.bing.com/th/id/R.45cb873c207c94736b6351b336773ee4?rik=NDPGYRGANCQo1w&riu=http%3a%2f%2fdgoae.unam.mx%2fCOE%2fassets%2fimg%2fwhy-us.png&ehk=laya8hZFRpUb8DLK0rVE3VPcMW7u2ce%2f74%2bvKURdJe4%3d&risl=&pid=ImgRaw&r=0"
          alt="Étudiants M2I"
          style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '10px' }}
        />
      </Box>
    </Box>
  );
};

export default WelcomeSection;
