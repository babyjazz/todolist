import { useEffect, useState } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export default function Select({ options }) {
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState(options?.[0])

  const handleClickOutside = (e) => {
    if (
      !e.target.classList.contains('options') &&
      !e.target.classList.contains('option')
    ) {
      setVisible(false)
    }
  }

  useEffect(() => {
    // Detect close dropdown when click outside dropdown
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleVisible = () => {
    setVisible(!visible)
  }

  const handleSelectValue = (opt) => {
    setSelected(opt)
    toggleVisible()
  }

  return (
    <div className={styles.container}>
      <button type="button" className={styles.select} onClick={toggleVisible}>
        {selected?.label}
      </button>
      {visible && (
        <ul
          className={cx(styles.options, 'options')}
          tabIndex={-1}
          data-visible={visible}
        >
          {options?.map((opt) => (
            <li
              key={opt?.value}
              onClick={() => handleSelectValue(opt)}
              className={cx(styles.option, 'option', {
                [styles.active]:
                  selected?.value && selected?.value === opt?.value,
              })}
            >
              <option value={opt?.value} className="option">
                {opt?.label}
              </option>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

Select.defaultProps = {
  options: [],
}

Select.propTypes = {
  options: PropTypes.array,
}
