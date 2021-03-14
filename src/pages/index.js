import * as React from 'react'
import Block1 from '../components/Home/Block1'
import Block2 from '../components/Home/Block2'
import Block3 from '../components/Home/Block3'
import Layout from '../Layouts/Layout'
import waves from '../assets//images/home/waves_2.png'

const IndexPage = () => {
  return (
    <Layout>
      <Block1 />
      <Block2 />
      <Block3 />
      <img src={waves} style={{ width: '100%', marginTop: '2.5em' }} alt='' />
    </Layout>
  )
}

export default IndexPage
