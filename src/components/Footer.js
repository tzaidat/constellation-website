import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#0c0012', color: '#fff', padding: '20px 0' }}>
      <img src='/placeholder.png' height="60px" alt='logo'></img>
      <Grid container justifyContent="center" spacing={2}>
        {['Games', 'Books', 'Movies', 'Shows'].map((item) => (
          <Grid item key={item}>
            <Link href={`/${item.toLowerCase()}`} color="inherit" underline="hover">
              {item}
            </Link>
          </Grid>
        ))}
      </Grid>
      <Box sx={{display: "flex", justifyContent: "space-between", textAlign: "center", marginLeft: "20px", marginRight: "20px"}}>
        <Typography variant="body2" color="textSecondary" marginTop="20px">
          © Tameem Zaidat 2024. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <IconButton href="https://instagram.com" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://facebook.com" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
            <FacebookIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
