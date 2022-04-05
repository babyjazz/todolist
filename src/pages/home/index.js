import { useCallback, useEffect } from 'react'
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

  const removeTodo = useCallback(
    (value) => {
      dispatch(todoActions.delete.start(value))
    },
    [dispatch],
  )

  const fetchListTodo = useCallback(() => {
    dispatch(todoActions.list.start())
  }, [dispatch])

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

  useEffect(() => {
    fetchListTodo()
  }, [fetchListTodo])

  return (
    <div className={styles.container}>
      <Progress dataSource={todos} />
      <div className={styles.task}>
        <div className={styles.header}>
          <p className={styles.title}>Task</p>
          <Select options={options} />
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
