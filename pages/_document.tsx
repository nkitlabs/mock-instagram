import createEmotionServer from '@emotion/server/create-instance'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import { createEmotionCache } from 'libs/emotion'

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)

    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        /** @param {AppType & EmotionCache} App, but currently use `any` */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        enhanceApp: (App: any) =>
          function EnhanceApp(props) {
            return <App emotionCache={cache} {...props} />
          },
      })

    const initialProps = await Document.getInitialProps(ctx)

    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ))

    return {
      ...initialProps,
      // * Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/ig-icon.png" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body style={{ margin: 0, background: '#fafafa' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
