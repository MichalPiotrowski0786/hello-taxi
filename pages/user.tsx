import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import User from '../components/User'

const UserPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hello Taxi User</title>
        <meta name="description" content="User" />
      </Head>
      <main>
        <Header />
        <User />
      </main>
    </div>
  )
}

export default UserPage