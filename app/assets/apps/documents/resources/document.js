import { createSelector } from 'reselect'

export const actionTypes = {
  TOGGLE_CHECKBOX: 'documents/TOGGLE_CHECKBOX',
}

function toggleCheckboxInCollection(checkboxesCollection, id, checked) {
  return checkboxesCollection.map((checkbox) => {
    if (checkbox.id === id) {
      return {
        ...checkbox,
        checked,
      }
    }
    return checkbox
  })
}

export function reducer (state = {}, action = {}) {
  switch (action.type) {
    case actionTypes.TOGGLE_CHECKBOX: {
      const { pageId, id, checked } = action
      const { pages: previousPages } = state
      const pages = previousPages.map((page) => {
        if (page.id === pageId) {
          const { checkboxes: previousCheckboxes } = page;
          const checkboxes = toggleCheckboxInCollection(previousCheckboxes, id, checked)
          return {
            ...page,
            checkboxes,
          }
        }
        return page
      })
      return {
        ...state,
        pages,
      }
    }
    default:
      return state
  }
}

// Action Creators

const toggleCheckbox = (pageId, id, checked) => ({ type: actionTypes.TOGGLE_CHECKBOX, pageId, id, checked })

export const actions = {
  toggleCheckbox,
}
