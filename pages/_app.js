import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import { Provider } from 'coda-auth/client'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'nprogress/nprogress.css'
import '../styles/globals.css'

NProgress.configure({ showSpinner: false, trickleRate: 0.1, trickleSpeed: 300 })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeError', () => NProgress.done())
Router.events.on('routeChangeComplete', () => NProgress.done())

export default function app({ Component, pageProps }) {
  return (
    <div className="site">
      <Provider session={pageProps.session}>
          <Head>
            <title>E-Commerce App</title>
            <meta charSet="UTF-8" />
            <meta name="description" content="Learn Web Development fast" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="apple-touch-icon" href="/image/favicon-32x32.gif" />
            <link rel="icon" href="/image/favicon-32x32.gif" />
          </Head>
          <Navigation />
          <main>
            <Container>
              <Component {...pageProps} />
            </Container>
          </main>
          <Footer />
      </Provider>
    </div>
  )
}
