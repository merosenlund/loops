import styles from '../styles/Home.module.css'

export default function DumpZone() {
  return (
    <div className={styles.dumpZone}>
      Brain Dump Zone
      <textarea placeholder='Starting decomposing here!' className={styles.inputDump}></textarea>
    </div>
  )
}