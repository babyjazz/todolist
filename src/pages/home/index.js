import Progress from 'componnets/progress'
import Select from 'componnets/select'
import Task from 'componnets/task'
import styles from './index.module.scss'

const options = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Done',
    value: 'done',
  },
  {
    label: 'Undone',
    value: 'undone',
  },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Progress />
      <div className={styles.task}>
        <div className={styles.header}>
          <p className={styles.title}>Task</p>
          <Select options={options} />
        </div>
        <div className={styles.body}>
          <Task />
        </div>
      </div>
    </div>
  )
}
