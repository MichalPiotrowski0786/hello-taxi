import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Trips from '../components/Trips'
import { tripsType } from '../utils/dataTypes'

const TripsPage: NextPage<tripsType> = ({ trips }) => {
  return (
    <div>
      <Head>
        <title>Hello Taxi Trips</title>
        <meta name="description" content="Trips" />
      </Head>
      <main>
        <Header />
        <Trips trips={trips} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://raw.githubusercontent.com/MichalPiotrowski0786/mock-taxi-api/main/trips.json')
  const trips = await res.json()

  console.log(trips)

  return {
    props: {
      trips
    }
  }
}

export default TripsPage
