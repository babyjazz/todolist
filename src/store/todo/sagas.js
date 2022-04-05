import { takeEvery, call, put } from 'redux-saga/effects'
import { todoApi } from 'api'
import { todoActions } from './reducers'

function* listTodo(action) {
  try {
    const response = yield call(todoApi.listTodo, action.payload)
    yield put(todoActions.list.success(response))
  } catch (error) {
    yield put(todoActions.list.failure(error))
  }
}

function* listTodoWatcher() {
  yield takeEvery(todoActions.list.start.toString(), listTodo)
  yield takeEvery(todoActions.update.success.toString(), listTodo)
  yield takeEvery(todoActions.create.success.toString(), listTodo)
  yield takeEvery(todoActions.delete.success.toString(), listTodo)
}

function* updateTodo(action) {
  try {
    const response = yield call(todoApi.updateTodo, action.payload)
    yield put(todoActions.update.success(response))
  } catch (error) {
    yield put(todoActions.update.failure(error))
  }
}

function* updateTodoWatcher() {
  yield takeEvery(todoActions.update.start.toString(), updateTodo)
}

function* createTodo(action) {
  try {
    const response = yield call(todoApi.createTodo, action.payload)
    yield put(todoActions.create.success(response))
  } catch (error) {
    yield put(todoActions.create.failure(error))
  }
}

function* createTodoWatcher() {
  yield takeEvery(todoActions.create.start.toString(), createTodo)
}

function* deleteTodo(action) {
  try {
    const response = yield call(todoApi.deleteTodo, action.payload)
    yield put(todoActions.delete.success(response))
  } catch (error) {
    yield put(todoActions.delete.failure(error))
  }
}

function* deleteTodoWatcher() {
  yield takeEvery(todoActions.delete.start.toString(), deleteTodo)
}

const todoSagas = {
  listTodoWatcher,
  updateTodoWatcher,
  createTodoWatcher,
  deleteTodoWatcher,
}

export default todoSagas
