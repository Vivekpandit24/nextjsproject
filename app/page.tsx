import Head from 'next/head';
import Image from 'next/image';
import styles from '/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </nav>
        <div className={styles.socials}>
          <a href="#">Follow Us:</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.text}>
            <h1><span className={styles.highlight}>I AM</span> VIVEK.</h1>
            <p>WELCOME TO MY PROFILE</p>
            <a href="#" className={styles.link}>See All Projects ↠</a>
          </div>
          <div className={styles.image}>
            <Image src="https://i.postimg.cc/6Q6rrppB/Photoroom-20240818-162829.png" alt="Vivek" width={500} height={600} />
            <div className={styles.background}></div>
          </div>
        </section>
      </main>
    </div>
  )
}