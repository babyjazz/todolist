import { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './index.module.scss'

export default function Checkbox({ defaultChecked, onClick }) {
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
    </div>
  )
}

Checkbox.defaultProps = {
  defaultChecked: false,
  //   checked: false,
  onClick: () => undefined,
}

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  //   checked: PropTypes.bool,
  onClick: PropTypes.func,
}
