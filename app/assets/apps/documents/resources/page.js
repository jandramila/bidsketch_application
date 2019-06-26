export const actionTypes = {
  CHANGE: 'page/CHANGE',
  START_GUIDED_FLOW: 'page/START_GUIDED_FLOW',
}

const defaultState = {
  guidedFlow: false,
  selectedPage: null,
}

export function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case actionTypes.CHANGE:
      return {
        ...state,
        guidedFlow: false,
        selectedPage: action.page,
      }
    case actionTypes.START_GUIDED_FLOW:
      return {
        ...state,
        guidedFlow: true,
      }
    default:
      return state
  }
}

// Action Creators

const changePage = page => ({ type: actionTypes.CHANGE, page })
const startGuidedFlow = () => ({ type: actionTypes.START_GUIDED_FLOW })

export const actions = {
  changePage,
  startGuidedFlow,
}
