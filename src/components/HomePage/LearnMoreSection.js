import React from 'react';
import { Box, Typography } from '@mui/material';

const LearnMoreSection = () => {
  return (
    <Box id="learn-more-section" sx={{ padding: '40px', backgroundColor: '#11001a', color: '#fff' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
        Learn More
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '20px' }}>
        Too lazy to write it.
      </Typography>
      {/* Add more content here */}
    </Box>
  );
};

export default LearnMoreSection;
