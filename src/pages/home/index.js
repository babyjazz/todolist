import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoActions, todoSelectors } from 'store/todo'
import isEmpty from 'lodash/isEmpty'
import Progress from 'componnets/progress'
import Select from 'componnets/select'
import Task from 'componnets/task'
import styles from './index.module.scss'

const options = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Done',
    value: 'done',
  },
  {
    label: 'Undone',
    value: 'undone',
  },
]

export default function Home() {
  const dispatch = useDispatch()
  const { data: todos } = useSelector(todoSelectors.listTodos)
  const [filter, setFilter] = useState('all')

  const fetchListTodo = useCallback(
    (data) => {
      dispatch(todoActions.list.start(data))
    },
    [dispatch],
  )

  const removeTodo = useCallback(
    (data) => {
      dispatch(todoActions.delete.start({ data, filter }))
    },
    [dispatch, filter],
  )

  const updateTodo = useCallback(
    (data) => {
      dispatch(todoActions.update.start({ data, filter }))
    },
    [dispatch, filter],
  )

  const createTodo = useCallback(
    (data) => {
      dispatch(todoActions.create.start({ data, filter }))
    },
    [dispatch, filter],
  )

  useEffect(() => {
    fetchListTodo()
  }, [fetchListTodo])

  const handleFilter = (value) => {
    const params = {}
    if (value === 'done') {
      params.completed = true
    } else if (value === 'undone') {
      params.completed = false
    }
    setFilter(params)
    fetchListTodo(params)
  }

  return (
    <div className={styles.container}>
      <Progress dataSource={todos} />
      <div className={styles.task}>
        <div className={styles.header}>
          <p className={styles.title}>Task</p>
          <Select options={options} onChange={handleFilter} />
        </div>
        <div className={styles.body}>
          {!isEmpty(todos) &&
            todos.map((todo) => (
              <Task
                key={todo?.id}
                label={todo?.title}
                defaultChecked={todo?.completed}
                onEdit={(value) =>
                  updateTodo({
                    id: todo?.id,
                    title: value,
                  })
                }
                onCheck={(isChecked) =>
                  updateTodo({
                    id: todo?.id,
                    completed: isChecked,
                  })
                }
                onDelete={() => removeTodo({ id: todo?.id })}
              />
            ))}
          <Task
            type="addlist"
            placeholder="Add your todo..."
            onCreate={(value) => {
              createTodo({ title: value, completed: false })
            }}
          />
        </div>
      </div>
    </div>
  )
}
