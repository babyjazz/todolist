/* eslint-disable  */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { MenuIcon } from 'assets/images'
import Checkbox from 'componnets/checkbox'
import Dropdown from 'componnets/dropdown'
import styles from './index.module.scss'

export default function Task({ type, label, placeholder, checked }) {
  const [newTodoValue, setNewTodoValue] = useState()
  const [editTodoValue, setEditTodoValue] = useState()
  const [isEdit, setIsEdit] = useState(false)

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
    // TODO implement API submit here
    console.log('TODO submit here', newTodoValue)
    setNewTodoValue('')
  }

  const handleSubmitEditTodo = (e) => {
    e.preventDefault()
    // TODO implement API submit here
    console.log('TODO submit edit here', editTodoValue)
    setIsEdit(false)
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
                  onChange={(e) => setEditTodoValue(e.target.value)}
                />
                <button className={styles.submit}>Save</button>
              </form>
            </div>
          ) : (
            <>
              <div className={styles.checkbox_container}>
                <Checkbox checked={checked} />
                <span className={styles.text_input}>{label}</span>
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
  label: null,
  type: 'todo',
  placeholder: null,
  checked: false,
}

Task.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['todo', 'addlist']),
  placeholder: PropTypes.string,
  checked: PropTypes.bool,
}
