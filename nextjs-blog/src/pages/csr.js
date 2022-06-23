import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import SubLayout from '../components/SubLayout'

export default function CSR() {
  const [time, setTime] = useState()

  useEffect(() => {
    console.log('client')
    setTime(new Date().toISOString())
  }, [])

  return (
    <>
      <h1 className="title">{time}</h1>
    </>
  )
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
