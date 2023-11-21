import Head from 'next/head';
import styles from '../styles/Home.module.css';

// use client
export default function Home() {

  

  return (
    <div className={styles.container}>
      
      <Head>
        <title>SAIF</title>
        <meta name="description" content="SAIF Website" />
      </Head>

      

      <main className={styles.main}>
        <nav className={styles.navbar}>
        <div className={styles.logo}>
            <img src="/media/saif_logo.png" alt="Stanford Active Inference Group Logo" className={styles.logoImage} />
          </div>
          <ul className={styles.navItems}>
            <li className={styles.navItem}><a href="#about">About</a></li>
            {/* Add additional nav items here */}
          </ul>
        </nav>
        <h1 className={styles.title}>
        Stanford Active Inference Group
        </h1>
        <p className={styles.description}>
          The Stanford Active Inference Group provides a space for learning and applying Active Inference, a rapidly emerging formalism for intelligent systems.
          We host meetings, workshops, and facilitate projects bringing Active Inference to various fields. We thrive on inter-disciplinary discussions and collaborations and are always eager to welcome new participants.
          If you are interested in learning more, sign up to our mailing list!
        </p>
        <div className={styles.emailInputGroup}>
          <input type="email" id="email" name="email" placeholder="Your email address" className={styles.emailInput} />
          <button class={styles.button39} role="button">Join</button>
        </div>
        <p className={styles.inspired}>
          Established in 2023 at Stanford University.
        </p>
      </main>
    </div>
  )
}
