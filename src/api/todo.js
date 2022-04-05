import { get } from './api-creator'

function listTodo() {
  return get('/todos')
}

const todoApi = { listTodo }

export default todoApi
