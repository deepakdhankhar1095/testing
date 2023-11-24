import React from 'react';
import Fab from '@mui/material/Fab';
import { WhatsApp } from '@mui/icons-material';

const whatsappData = {
  name: 'WhatsApp',
  destination: 'http://wa.me/918217560854',
};

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Open the WhatsApp link in a new tab
    window.open(whatsappData.destination, '_blank');
  };

  return (
    <div>
   <Fab
        style={{
          backgroundColor: '#4CC85A', // Set the background color to #4CC85A
          color: 'white', // Set the text color to white
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        }}        aria-label={whatsappData.name}
        onClick={handleWhatsAppClick}
      >
        <WhatsApp />
      </Fab>
    </div>
  );
};

export default WhatsAppButton;
