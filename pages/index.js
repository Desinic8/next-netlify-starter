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
      <img src="/TeacherConsole.png" alt="Teacher Console Version 1.10" className={styles.banner} />
    </p>  
  </div>   
</div>
      </main>

      <Footer />
    </div>
  )
}
