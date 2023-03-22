import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/Favicon.png" />
      </Head>

      <main>
        <Header title="Desinic8 Teacher" />
        <p className="description">
          Classroom Management in the Works
        </p>
        <p className="subtitle">
          Providing Affordable Classroom Management Tools for Every School
        </p>
      </main>

      <Footer />
    </div>
  )
}
