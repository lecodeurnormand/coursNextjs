import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {

  const id = "article"
  return (
    <>
    <Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
    </Head>
    <div className={styles.container}>
    </div>
    </>
  )
}

