import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
  const faqs = [
    { question: 'What is Constellation?', answer: 'Constellation is a platform to discover, log, and review your favorite books, games, movies, and shows.' },
    { question: 'How do I use Constellation?', answer: 'Simply create an account and start adding your favorite items to your log, and leave reviews for others to see.' },
  ];

  return (
    <Box id="faq-section" sx={{ padding: '40px', backgroundColor: '#11001a', color: '#fff' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{ backgroundColor: '#220033', color: '#fff' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;
