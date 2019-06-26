export const actionTypes = {
  CHANGE: 'page/CHANGE'
}

const defaultState = {
  selectedPage: null,
}

export function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case actionTypes.CHANGE:
      return {
        ...state,
        selectedPage: action.page,
      }
    default:
      return state
  }
}

// Action Creators

const changePage = page => ({ type: actionTypes.CHANGE, page })

export const actions = {
  changePage
}
