import React from 'react';
import { Box, Grid, Typography, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Hero = () => {
  const categories = [
    { name: 'Books' },
    { name: 'Games' },
    { name: 'Movies' },
    { name: 'Shows' }
  ];

  const handleLearnMoreClick = () => {
    const section = document.getElementById('learn-more-section');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ flexGrow: 1, padding: '40px', backgroundColor: '#0C0012', color: '#fff', position: 'relative' }}>
      <Box className="rotatingText">
        <Typography variant="h2" component="div" sx={{ textAlign: 'center', position: 'relative', height: '60px' }}>
          <span className="rotatingText-adjective">Discover</span>
          <span className="rotatingText-adjective">Log</span>
          <span className="rotatingText-adjective">Review</span>
        </Typography>
      </Box>
      <Typography variant="h2" component="div" sx={{ textAlign: 'center', marginBottom: '20px' }}>
        Your Next Favorite
      </Typography>
      <Typography variant="h6" component="div" sx={{ textAlign: 'center', marginBottom: '20px', color: "gray" }}>
        Explore a world of entertainment
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {categories.map((category) => (
          <Grid item key={category.name} xs={12} sm={6} md={3}>
            <Link to={`/${category.name.toLowerCase()}`} style={{ textDecoration: 'none' }}>
              <Paper
                elevation={3}
                sx={{
                  height: '200px',
                  width: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, #BB89C2, #0C0012)',
                  color: '#fff',
                  position: 'relative',
                  textAlign: 'center',
                  borderRadius: '16px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                  }}
                >
                  {category.name}
                </Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
        <Button
          onClick={handleLearnMoreClick}
          sx={{
            color: '#fff',
            fontSize: '18px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
            }
          }}
          endIcon={<ArrowDownwardIcon />}
        >
          Learn More
        </Button>
      </Box>

    </Box>
  );
};

export default Hero;

