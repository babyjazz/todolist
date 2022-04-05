import Progress from 'componnets/progress'
import Select from 'componnets/select'
import Task from 'componnets/task'
import { isEmpty } from 'lodash'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoActions, todoSelectors } from 'store/todo'
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

  const fetchListTodo = useCallback(() => {
    dispatch(todoActions.list.start())
  }, [dispatch])

  useEffect(() => {
    fetchListTodo()
  }, [fetchListTodo])

  return (
    <div className={styles.container}>
      <Progress />
      <div className={styles.task}>
        <div className={styles.header}>
          <p className={styles.title}>Task</p>
          <Select options={options} />
        </div>
        <div className={styles.body}>
          {!isEmpty(todos) &&
            todos.map((todo) => (
              <Task
                label={todo?.title}
                checked={todo?.completed}
                key={todo?.id}
              />
            ))}
          <Task type="addlist" placeholder="Add your todo..." />
        </div>
      </div>
    </div>
  )
}
