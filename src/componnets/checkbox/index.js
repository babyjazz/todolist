import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './index.module.scss'

export default function Checkbox({ checked, defaultChecked }) {
  return (
    <div className={styles.container}>
      <div
        className={cx(styles.checkbox, {
          [styles.active]: checked || defaultChecked,
        })}
      />
    </div>
  )
}

Checkbox.defaultProps = {
  defaultChecked: false,
  checked: false,
}

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
}
