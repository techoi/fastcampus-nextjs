import Layout from '@components/Layout'
import { useRouter } from 'next/router'
import { useState } from 'react'
import '../styles/global.css'
import { formatDistanceToNow } from 'date-fns'
import ErrorBoundary from '@components/ErrorBoundary'
import Head from 'next/head'

export function reportWebVitals(metric) {
  console.log(metric)
}

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [visitedTime] = useState(new Date())

  return (
    <Layout home={router.pathname === '/'}>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <div>
        visited:{' '}
        {formatDistanceToNow(new Date(visitedTime), {
          addSuffix: true,
          includeSeconds: true,
        })}
      </div>
      <ErrorBoundary>
        <Component {...pageProps} pathname={router.pathname} />
      </ErrorBoundary>
    </Layout>
  )
}
