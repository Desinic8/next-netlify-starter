import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Desinic8 - Providing Affordable Classroom Management Tools</title>
        <link rel="icon" href="/Favicon.png" />
      </Head>

      <main>
    <div className="block">
  <div className="layout">
    <p className="col col-main">
      <p className="description">
          Classroom Management in the Works
        </p>
    <p className="subtitle">
          Providing Affordable Classroom Management Tools for Every School
        </p>
    </p>
    <p className="col col-complementary" role="complementary">
      
    </p>  
  </div>   
</div>
      </main>

      <Footer />
    </div>
  )
}
