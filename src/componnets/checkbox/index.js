import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './index.module.scss'

export default function Checkbox({ label, checked, defaultChecked }) {
  return (
    <div className={styles.container}>
      <div
        className={cx(styles.checkbox, {
          [styles.active]: checked || defaultChecked,
        })}
      />
      <span className={styles.label}> {label}</span>
    </div>
  )
}

Checkbox.defaultProps = {
  label: null,
  defaultChecked: false,
  checked: false,
}

Checkbox.propTypes = {
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
}
