import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { MenuIcon } from 'assets/images'
import Checkbox from 'componnets/checkbox'
import Dropdown from 'componnets/dropdown'
import { useDispatch } from 'react-redux'
import { todoActions } from 'store/todo'
import styles from './index.module.scss'

export default function Task({ type, id, label, placeholder, defaultChecked }) {
  const dispatch = useDispatch()
  const [newTodoValue, setNewTodoValue] = useState()
  const [editTodoValue, setEditTodoValue] = useState()
  const [isEdit, setIsEdit] = useState(false)

  const updateTodo = useCallback(
    (value) => {
      dispatch(todoActions.update.start(value))
    },
    [dispatch],
  )

  const createTodo = useCallback(
    (value) => {
      dispatch(todoActions.create.start(value))
    },
    [dispatch],
  )

  const handleEdit = () => {
    setIsEdit(true)
  }

  const actionConfig = [
    {
      key: 'edit',
      label: 'Edit',
      action: handleEdit,
    },
    {
      key: 'delete',
      label: 'Delete',
    },
  ]

  const handleSubmitAddTodo = (e) => {
    e.preventDefault()
    setNewTodoValue('')
    createTodo({ title: newTodoValue, completed: false })
  }

  const handleSubmitEditTodo = (e) => {
    e.preventDefault()
    updateTodo({
      id,
      title: editTodoValue,
    })
    setIsEdit(false)
  }

  const handleToggleCheck = (value) => {
    updateTodo({
      id,
      completed: value,
    })
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
                <button type="button" className={styles.submit}>
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
                />
                <span className={styles.text_input}>
                  {editTodoValue || label}
                </span>
              </div>
              <Dropdown list={actionConfig}>
                <MenuIcon />
              </Dropdown>
            </>
          )}
        </>
      ) : (
        <form className={styles.form} onSubmit={handleSubmitAddTodo}>
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
  id: null,
  label: null,
  type: 'todo',
  placeholder: null,
  defaultChecked: false,
}

Task.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  type: PropTypes.oneOf(['todo', 'addlist']),
  placeholder: PropTypes.string,
  defaultChecked: PropTypes.bool,
}
