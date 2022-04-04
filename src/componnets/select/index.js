import { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export default function Select({ options }) {
  const toggleRef = useRef()
  const listRef = useRef()
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState(options?.[0])

  const handleClickOutside = (e) => {
    if (
      toggleRef.current &&
      !toggleRef.current.contains(e.target) &&
      listRef.current &&
      !listRef.current.contains(e.target)
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
      <button
        ref={toggleRef}
        type="button"
        className={styles.select}
        onClick={toggleVisible}
      >
        {selected?.label}
      </button>
      {visible && (
        <ul
          className={styles.options}
          tabIndex={-1}
          data-visible={visible}
          ref={listRef}
        >
          {options?.map((opt) => (
            <li
              key={opt?.value}
              onClick={() => handleSelectValue(opt)}
              className={cx(styles.option, {
                [styles.active]:
                  selected?.value && selected?.value === opt?.value,
              })}
            >
              <option value={opt?.value}>{opt?.label}</option>
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
