import Layout from '../components/Layout'
import SubLayout from '../components/SubLayout'

export async function getStaticProps() {
  console.log('server')

  return {
    props: { time: new Date().toISOString() },
  }
}

export default function SSG({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>
    </>
  )
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
