import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;
