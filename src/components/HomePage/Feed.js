import React from 'react';
import { Box, Typography, Avatar, Paper, Grid } from '@mui/material';

const reviews = [
  { username: 'User', text: 'The Will of the Many', rating: '★★★★★', comment: 'New Favorite!', img: '/static/twtm.jpg' },
  { username: 'User', text: 'Hollow Knight', rating: '★★★★☆', comment: 'Too Easy!', img: '/static/hk.jpeg' },
  { username: 'User', text: 'Fantastic Mr Fox', rating: '★★★★★', comment: 'I am literally him.', img: '/static/fmf.jpg' },
  { username: 'User', text: 'Avatar: The Last Airbender', rating: '★★★★★', comment: 'I’d be an airbender for sure.', img: '/static/atla.jpg' }
];

const Feed = () => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px', marginTop: '50px', minHeight: '100vh' }}>
      {reviews.map((review, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            display: 'flex',
            padding: '20px',
            marginBottom: '40px',
            width: '100%',
            maxWidth: '500px',
            opacity: 1 - index * 0.2,
            backgroundColor: "#202134"
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Avatar>{review.username[0]}</Avatar>
            </Grid>
            <Grid item xs={8} lineHeight={1.2}>
              <Typography variant="h6">{review.text}</Typography>
              <Typography variant="body2">{review.rating}</Typography>
              <Typography variant="body2">{review.comment}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Box
                sx={{
                  width: '50px',
                  height: '70px',
                  backgroundColor: '#3d3c4a',
                  borderRadius: '2px',
                  backgroundImage: `url(${review.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default Feed;
