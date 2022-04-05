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
    UPDATE: {
      START: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
    CREATE: {
      START: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
    DELETE: {
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
    [
      todoActions.update.start,
      (state) => ({
        ...state,
        update: {
          ...initialStatus,
          loading: true,
        },
      }),
    ],
    [
      todoActions.update.success,
      (state, action) => ({
        ...state,
        update: {
          ...initialStatus,
          success: true,
          data: action.payload,
        },
      }),
    ],
    [
      todoActions.update.failure,
      (state, action) => ({
        ...state,
        update: {
          ...initialStatus,
          failure: true,
          error: action.payload,
        },
      }),
    ],
    [
      todoActions.create.start,
      (state) => ({
        ...state,
        create: {
          ...initialStatus,
          loading: true,
        },
      }),
    ],
    [
      todoActions.create.success,
      (state, action) => ({
        ...state,
        create: {
          ...initialStatus,
          success: true,
          data: action.payload,
        },
      }),
    ],
    [
      todoActions.create.failure,
      (state, action) => ({
        ...state,
        create: {
          ...initialStatus,
          failure: true,
          error: action.payload,
        },
      }),
    ],
    [
      todoActions.delete.start,
      (state) => ({
        ...state,
        delete: {
          ...initialStatus,
          loading: true,
        },
      }),
    ],
    [
      todoActions.delete.success,
      (state, action) => ({
        ...state,
        delete: {
          ...initialStatus,
          success: true,
          data: action.payload,
        },
      }),
    ],
    [
      todoActions.delete.failure,
      (state, action) => ({
        ...state,
        delete: {
          ...initialStatus,
          failure: true,
          error: action.payload,
        },
      }),
    ],
  ]),
  {
    list: initialStatus,
    update: initialStatus,
    create: initialStatus,
    delete: initialStatus,
  },
  options,
)
