import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Map from '../components/Map'

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hello Taxi Homepage</title>
        <meta name="description" content="Home" />
      </Head>
      <main>
        <Header />
        <Map />
      </main>
    </div>
  )
}

export default HomePage
