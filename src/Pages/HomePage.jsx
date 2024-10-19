import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeSection from '../components/WelcomeSection';
import MotivationBox from '../components/MotivationBox';
import ValuesCard from '../components/ValuesCard';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    message: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setForm({ name: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer le formulaire avec emailjs ou une autre API
    console.log('Message envoyé:', form);
    handleClose();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw',
        overflowX: 'hidden',
      }}
    >
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <WelcomeSection />
        <MotivationBox />
        <ValuesCard />
      </Box>
      <Footer />

      {/* Icône de chat */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
          backgroundColor: 'rgba(64, 155, 212, 0.5)',
          borderRadius: '50%',
          padding: 1,
        }}
      >
        <IconButton
          onClick={handleOpen}
          sx={{ color: '#fff', '&:hover': { backgroundColor: 'rgba(64, 155, 212, 0.7)' } }}
        >
          <ChatIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Box>

      {/* Modal de chat */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'white',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Envoyez un message
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Nom"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Envoyer
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default HomePage;
