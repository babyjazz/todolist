import { get, patch, post, remove } from './api-creator'

function listTodo(data) {
  return get('/todos', data)
}

function updateTodo({ id, ...data }) {
  return patch(`/todos/${id}`, data)
}

function createTodo(data) {
  return post('/todos', data)
}

function deleteTodo({ id }) {
  return remove(`/todos/${id}`)
}

const todoApi = { listTodo, updateTodo, createTodo, deleteTodo }

export default todoApi
