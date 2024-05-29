import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Lgo from '../assets/logo.png'
import Success from '../components/Success'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Comparison from '../components/Comparison'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>BLVESS</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Header />
        <Success/>
        <Comparison/>
        <Footer />
      </div>
    </>
  )
}
