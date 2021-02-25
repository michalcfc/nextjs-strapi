import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './../themes';
import { GlobalStyles } from './../shared/styles';

import Layout from "../layout"


export default function App({ Component, pageProps }) {

  return (
    <>
      <ThemeProvider 
        theme={lightTheme}
      >
      <GlobalStyles />
        <Layout>
              <Component 
                {...pageProps} 
                />
        </Layout>
      </ThemeProvider>
      
    </>
  )
}