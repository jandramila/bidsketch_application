import { createSelector } from 'reselect'

export const actionTypes = {
  FINISH_DOCUMENT: 'documents/FINISH_DOCUMENT',
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
    case actionTypes.FINISH_DOCUMENT:
      return {
        ...state,
        blocked: true,
      }
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

// Endpoints

const updateCheckbox = (documentId, pageId, id, checked) => {
  const url = `/documents/${documentId}/pages/${pageId}/checkboxes/${id}`
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      checked,
    })
  });
}

// Action Creators

const finishDocument = () => ({ type: actionTypes.FINISH_DOCUMENT })
const toggleCheckbox = (pageId, id, checked) => ({ type: actionTypes.TOGGLE_CHECKBOX, pageId, id, checked })
const requestToggleCheckbox = (pageId, id, checked) => async (dispatch, getState) => {
  // Do optimistic update
  dispatch(toggleCheckbox(pageId, id, checked))
  try {
    const { id: documentId } = getState().document
    await updateCheckbox(documentId, pageId, id, checked)
  } catch (error) {
    console.error(error)
    // Undo optimistic update if operation failed for some reason
    dispatch(toggleCheckbox(pageId, id, !checked))
  }
}

export const actions = {
  finishDocument,
  requestToggleCheckbox,
  toggleCheckbox,
}