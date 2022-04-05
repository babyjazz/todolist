import { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './index.module.scss'

export default function Checkbox({ label, defaultChecked, onClick }) {
  const [checked, setChecked] = useState(defaultChecked)

  const handleClick = () => {
    onClick(!checked)
    setChecked(!checked)
  }

  return (
    <div className={styles.container}>
      <div
        role="button"
        tabIndex={0}
        aria-label="checkbox-todo"
        onClick={handleClick}
        className={cx(styles.checkbox, {
          [styles.active]: checked,
        })}
      />
      <span
        className={cx(styles.text_input, {
          [styles.checked]: checked,
        })}
      >
        {label}
      </span>
    </div>
  )
}

Checkbox.defaultProps = {
  defaultChecked: false,
  label: null,
  onClick: () => undefined,
}

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
}
