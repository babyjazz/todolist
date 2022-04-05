import PropTypes from 'prop-types'
import { MenuIcon } from 'assets/images'
import Checkbox from 'componnets/checkbox'
import Dropdown from 'componnets/dropdown'
import styles from './index.module.scss'

const actionConfig = [
  {
    key: 'edit',
    label: 'Edit',
  },
  {
    key: 'delete',
    label: 'Delete',
  },
]

export default function Task({ type, placeholder }) {
  return (
    <div className={styles.container}>
      {type === 'todo' ? (
        <>
          <div className={styles.checkbox_container}>
            <Checkbox checked />
            <input value="Publish a new blog" className={styles.input} />
          </div>
          <Dropdown list={actionConfig}>
            <MenuIcon />
          </Dropdown>
        </>
      ) : (
        <input placeholder={placeholder} className={styles.input} />
      )}
    </div>
  )
}

Task.defaultProps = {
  type: 'todo',
  placeholder: null,
}

Task.propTypes = {
  type: PropTypes.oneOf(['todo', 'addlist']),
  placeholder: PropTypes.string,
}
