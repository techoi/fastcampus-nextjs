import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function FirstItem() {
  return (
    <>
      <h1 className="title">First Item</h1>
    </>
  )
}

FirstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
