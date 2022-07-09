import Layout from '@components/Layout'
import { useRouter } from 'next/router'
import { useState } from 'react'
import '../styles/global.css'
import { formatDistanceToNow } from 'date-fns'

export function reportWebVitals(metric) {
  console.log(metric)
}

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [visitedTime] = useState(new Date())

  return (
    <Layout home={router.pathname === '/'}>
      <div>
        visited:{' '}
        {formatDistanceToNow(new Date(visitedTime), {
          addSuffix: true,
          includeSeconds: true,
        })}
      </div>
      <Component {...pageProps} pathname={router.pathname} />
    </Layout>
  )
}
