import { all, fork } from 'redux-saga/effects'
import { todoSagas } from 'store/todo'

export default function* rootSaga() {
  yield all([
    fork(todoSagas.listTodoWatcher),
    fork(todoSagas.updateTodoWatcher),
    fork(todoSagas.createTodoWatcher),
  ])
}
