import Head from 'next/head'

import { CacheProvider, EmotionCache, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { StyledEngineProvider, ThemeProvider as MaterialThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'

import createEmotionCache from 'libs/emotion'
import { theme } from 'themes/theme'

// * Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({ Component, pageProps: { ...pageProps }, emotionCache = clientSideEmotionCache }: CustomAppProps) {
  return (
    <>
      <Head>
        <title>Mock-instagram</title>
      </Head>

      <StyledEngineProvider injectFirst>
        <CacheProvider value={emotionCache}>
          <MaterialThemeProvider theme={theme}>
            <EmotionThemeProvider theme={theme}>
              <Component {...pageProps} />
            </EmotionThemeProvider>
          </MaterialThemeProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </>
  )
}

export default MyApp
