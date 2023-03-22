import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Desinic8 Teacher Console</title>
        <link rel="icon" href="/Favicon.png" />
      </Head>

      <main>
        <Header title="Desinic8 Teacher" />
        <p className="description">
          
        </p>
      </main>

      <Footer />
    </div>
  )
}
