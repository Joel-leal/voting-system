import '../styles/globals.css';

import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react';

import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
