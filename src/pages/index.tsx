import type { NextPage } from 'next'
import Head from 'next/head'
import { BrowserRouter } from 'react-router-dom'
import Router from '../routes/routes'
import Login from './login'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lead | Services</title>
      </Head>
        <Login />
    </>
  )
}

export default Home
