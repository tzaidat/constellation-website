// src/components/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ boxShadow: 'none' }}>
      <Toolbar>
          <Typography variant="h6" component="div">
            <Link to="/" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold', fontFamily:"helvetica"}}>
              CONSTELLATION
            </Link>
          </Typography>
          <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'center', flexGrow: 1 }}>
            <Link to="/games" style={{ textDecoration: 'none', color: '#fff' }}>Games</Link>
            <Link to="/books" style={{ textDecoration: 'none', color: '#fff' }}>Books</Link>
            <Link to="/movies" style={{ textDecoration: 'none', color: '#fff' }}>Movies</Link>
            <Link to="/shows" style={{ textDecoration: 'none', color: '#fff' }}>Shows</Link>
          </Box>
          <Box>
            <Button color="inherit" sx={{ marginRight:"30px" }}>Login</Button>
            <Button color="inherit" sx={{ backgroundColor:" #BB89C2", "&:hover": {backgroundColor: "#3E005D"}}}>Register</Button>
          </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
