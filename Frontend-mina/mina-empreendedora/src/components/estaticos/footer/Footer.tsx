import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Footer.css'



function Copyright() {
  return (
    <>

    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" className='Icon'>
    <GitHubIcon/></a>
    

  
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
        Mina Empreendedora
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </>

  );
}

export default function Footer() {
  return (
    
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 4,
          mt: 'auto',
          backgroundColor: '#800000',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            
          </Typography>
          <Copyright />
        </Container>
      </Box>
  );
}
