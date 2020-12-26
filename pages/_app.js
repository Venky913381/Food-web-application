import Theme from '@styles/Theme'
import { ThemeProvider } from 'styled-components'

export default function App ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
