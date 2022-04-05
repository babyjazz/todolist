import { handleActions, createActions } from 'redux-actions'

const options = {
  prefix: 'TODO',
}

const initialStatus = {
  loading: false,
  success: false,
  data: {},
  failure: false,
  error: null,
}

export const todoActions = createActions(
  {
    LIST: {
      START: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
  },
  options,
)

export const todoReducer = handleActions(
  new Map([
    [
      todoActions.list.start,
      (state) => ({
        ...state,
        list: {
          ...initialStatus,
          loading: true,
        },
      }),
    ],
    [
      todoActions.list.success,
      (state, action) => ({
        ...state,
        list: {
          ...initialStatus,
          success: true,
          data: action.payload,
        },
      }),
    ],
    [
      todoActions.list.failure,
      (state, action) => ({
        ...state,
        list: {
          ...initialStatus,
          failure: true,
          error: action.payload,
        },
      }),
    ],
  ]),
  { list: initialStatus },
  options,
)
