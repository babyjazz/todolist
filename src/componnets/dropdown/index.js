import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export default function Dropdown({ children, list }) {
  const toggleRef = useRef()
  const listRef = useRef()
  const [visible, setVisible] = useState(false)

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

  const handleClickList = (l) => {
    l?.action()
    setVisible(false)
  }

  return (
    <div className={styles.list_action}>
      <div role="button" tabIndex={0} onClick={toggleVisible} ref={toggleRef}>
        {children}
      </div>
      {visible && (
        <ul className={styles.list_group} ref={listRef}>
          {list.map((l) => (
            <li
              key={l?.key}
              className={styles.list}
              onClick={() => handleClickList(l)}
            >
              {l?.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

Dropdown.defaultProps = {
  children: null,
  list: [],
}

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  list: PropTypes.array,
}
