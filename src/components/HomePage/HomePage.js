import React from 'react';
import Hero from './Hero';
import LearnMoreSection from './LearnMoreSection';
import FAQSection from './FAQSection';
import Footer from '../Footer';
import Feed from './Feed'
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <div>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0C0012', color: '#fff' }}>
            <Hero />
            <Feed />
        </Box>
        <LearnMoreSection />
        <FAQSection />
        <Footer />
    </div>
  );
};

export default HomePage;
