import styles from '../styles/Home.module.css'
import CurrentLoop from '../components/CurrentLoop.js'
import TasksList from '../components/TasksList.js'
import QuestionsList from '../components/QuestionsList.js'
import DumpZone from '../components/DumpZone.js'

export default function Decompose() {
  return (
    <div className={styles.loopContainer}>
      <CurrentLoop/>
      <TasksList/>
      <QuestionsList/>
      <DumpZone/>
    </div>
  )
}