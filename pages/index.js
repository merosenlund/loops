import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar.js'
import ReferenceAside from '../components/ReferenceAside.js'
import Decompose from '../components/Decompose.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.main}>
        <Decompose/>
        <ReferenceAside/>
      </div>
    </div>
  )
}
