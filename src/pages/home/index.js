import Progress from 'componnets/progress'
import Selection from 'componnets/selection'
import Task from 'componnets/task'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Progress />
      <div className={styles.task}>
        <div className={styles.header}>
          <p className={styles.title}>Task</p>
          <Selection />
        </div>
        <div className={styles.body}>
          <Task />
        </div>
      </div>
    </div>
  )
}
