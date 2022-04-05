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
}

const todoSagas = { listTodoWatcher }

export default todoSagas
