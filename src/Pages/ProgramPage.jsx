import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const ProgramPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      {/* Bouton de retour en arrière */}
      <IconButton 
        onClick={() => navigate(-1)} 
        sx={{ alignSelf: 'flex-start', marginBottom: '20px' }}
      >
        <ArrowBackIcon />
      </IconButton>

      {/* Image de la page */}
      <img src="/images/Test_M2I.png" alt="Programme M2I" style={{ maxWidth: '100%' }} />
    </Box>
  );
};

export default ProgramPage;
