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
          Click to <a href="/login.js">Login</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
