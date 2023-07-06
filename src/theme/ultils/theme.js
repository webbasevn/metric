import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#F80759',
    },
    secondary: {
      main: '#1E96D2',
    },
    error: {
      main: red.A400,
    },
    white: {
      main: '#fff'
    }
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;