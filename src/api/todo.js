import { get, patch, post } from './api-creator'

function listTodo() {
  return get('/todos')
}

function updateTodo({ id, ...data }) {
  return patch(`/todos/${id}`, data)
}

function createTodo(data) {
  return post('/todos', data)
}

const todoApi = { listTodo, updateTodo, createTodo }

export default todoApi
