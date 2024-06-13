// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0C0012',
        },
        secondary: {
            main: '#ff4081',
        },
        background: {
            default: '#17171c',
            paper: '#2d2c3a',
        },
        text: {
            primary: '#fff',
            secondary: '#24212f',
        },
    },
    typography: {
        h2: {
            fontSize: '3rem',
        },
        h5: {
            fontSize: '1.5rem',
        }
    },
});

export default theme;