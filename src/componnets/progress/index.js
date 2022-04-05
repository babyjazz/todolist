import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import styles from './index.module.scss'

export default function Progress({ dataSource }) {
  const total = dataSource.length || 0
  const completed =
    (!isEmpty(dataSource) &&
      dataSource.filter((todo) => todo?.completed).length) ||
    0

  return (
    <div className={styles.container}>
      <div className={styles.title}>Progress</div>

      <div className={styles.progress_container}>
        <div className={styles.bar} />
        <div
          className={styles.progress}
          style={{ width: `${(completed / total) * 100}%` }}
        />
      </div>

      <div className={styles.completed}>{completed || 0} completed</div>
    </div>
  )
}

Progress.defaultProps = {
  dataSource: [],
}

Progress.propTypes = {
  dataSource: PropTypes.array,
}
