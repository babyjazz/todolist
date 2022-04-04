import styles from './index.module.scss'

export default function Selection() {
  return (
    <div className={styles.container}>
      <select className={styles.selection}>
        <option>All</option>
        <option>Done</option>
        <option>Undone</option>
      </select>
    </div>
  )
}
