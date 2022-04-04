import styles from './index.module.scss'

export default function Progress() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Progress</div>

      <div className={styles.progress_container}>
        <div className={styles.bar} />
        <div className={styles.progress} />
      </div>

      <div className={styles.completed}>12 completed</div>
    </div>
  )
}
