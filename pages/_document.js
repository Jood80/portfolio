import { ColorModeScript } from '@chakra-ui/color-mode'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="portfolio" content="This is a portfolio" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
