import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './index.module.scss'

export default function Checkbox({ label }) {
  return (
    <div className={styles.container}>
      <div className={cx(styles.checkbox, styles.active)} />
      <span className={styles.label}> {label}</span>
    </div>
  )
}

Checkbox.defaultProps = {
  label: null,
}

Checkbox.propTypes = {
  label: PropTypes.string,
}
