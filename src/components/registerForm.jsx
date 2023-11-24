import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios"
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
const audienceId = '1b2c4f09dd'
const apiKey = '43eae4419dd72ba60069432a75311a37-us21'

const RegisterModal = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = async (e) => {
    if(email!==""){
      setEmailError(false)
    try {
      const response = await axios.post(`https://lifetalk.thriive.in/api/admin/sendMailToMailChimp/`, {
        email: email
      })
      console.log('Successfully subscribed to Mailchimp:', response.data);
      setShowThankYou(true);

      // Reset the email input and hide the "Thank you" message after 1 second.
      setTimeout(() => {
        setEmail('');
        setShowThankYou(false);

        // Close the modal after showing the "Thank you" message.
        onClose();
      }, 1500);
    } catch (error) {
      console.error('Mailchimp subscription failed:', error);
    }
  }
  else{
    setEmailError(true)
  }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
    e.preventDefault()
      handleSubmit();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: {xs:'340px',sm:'450px'},
          bgcolor: 'background.paper',
          borderRadius: 4,
          boxShadow: 24,
          p: 2,
        }}
      >
        <IconButton
          aria-label="Close"
          onClick={onClose}
          sx={{ position: 'absolute', top: 0, right: 0 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography sx={{color:"#7D0732",fontFamily:'Inter',fontSize:{xs:'1rem',sm:'1.5rem'}}}> Subscribe for updates</Typography>
        <form>
          <TextField
            label="Please enter your email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            onKeyDown={handleEnterKeyPress}
          />
           {showThankYou && (
             <Typography variant="body1" style={{ color: 'green', padding:'2px' }}>
              You're registered for UBH2023!
           </Typography>
          )}
           {emailError && (
             <Typography variant="body1" style={{ color: '#7D0732', padding:'2px' }}>
              Please enter your email
           </Typography>
          )}
          <Button variant="contained" onClick={handleSubmit} style={{ background: "#7D0732", color:'white',borderRadius:4, marginTop:'5px'}}   disabled={showThankYou}>
            Subscribe
          </Button>
          <Box
          sx={{ color: "black",borderRadius:4,fontSize:{xs:'0.750rem',sm:'1rem',marginTop:'10px',fontFamily:'Inter'}}} >
            Note : Please register for individual events separately
            </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default RegisterModal;
