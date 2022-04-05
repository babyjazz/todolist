import { useState } from 'react'
import PropTypes from 'prop-types'
import { MenuIcon } from 'assets/images'
import Checkbox from 'componnets/checkbox'
import Dropdown from 'componnets/dropdown'
import styles from './index.module.scss'

export default function Task({
  type,
  label,
  placeholder,
  defaultChecked,
  onCreate,
  onEdit,
  onCheck,
  onDelete,
}) {
  const [newTodoValue, setNewTodoValue] = useState()
  const [editTodoValue, setEditTodoValue] = useState()
  const [isEdit, setIsEdit] = useState(false)
  const actions = [
    {
      key: 'edit',
      label: 'Edit',
      action: () => setIsEdit(true),
    },
    {
      key: 'delete',
      label: 'Delete',
      action: onDelete,
    },
  ]

  const handleSubmitAddTodo = (e) => {
    e.preventDefault()
    onCreate(newTodoValue)
    setNewTodoValue('')
  }

  const handleSubmitEditTodo = (e) => {
    e.preventDefault()
    onEdit(editTodoValue)
    setIsEdit(false)
  }

  const handleToggleCheck = (isChecked) => {
    onCheck(isChecked)
  }

  return (
    <div className={styles.container}>
      {type === 'todo' ? (
        <>
          {isEdit ? (
            <div className={styles.checkbox_container}>
              <form className={styles.form} onSubmit={handleSubmitEditTodo}>
                <input
                  defaultValue={label}
                  className={styles.input}
                  value={editTodoValue}
                  onChange={(e) => setEditTodoValue(e.target.value)}
                />
                <button type="submit" className={styles.submit}>
                  Save
                </button>
              </form>
            </div>
          ) : (
            <>
              <div className={styles.checkbox_container}>
                <Checkbox
                  defaultChecked={defaultChecked}
                  onClick={handleToggleCheck}
                  label={editTodoValue || label}
                />
              </div>
              <Dropdown list={actions}>
                <MenuIcon />
              </Dropdown>
            </>
          )}
        </>
      ) : (
        <form
          className={styles.form}
          onSubmit={(e) => handleSubmitAddTodo(e)}
          data-name={isEdit}
        >
          <input
            value={newTodoValue}
            onChange={(e) => setNewTodoValue(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
          />
        </form>
      )}
    </div>
  )
}

Task.defaultProps = {
  label: null,
  type: 'todo',
  placeholder: null,
  defaultChecked: false,
  onCreate: () => undefined,
  onEdit: () => undefined,
  onCheck: () => undefined,
  onDelete: () => undefined,
}

Task.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['todo', 'addlist']),
  placeholder: PropTypes.string,
  defaultChecked: PropTypes.bool,
  onCreate: PropTypes.func,
  onEdit: PropTypes.func,
  onCheck: PropTypes.func,
  onDelete: PropTypes.func,
}
