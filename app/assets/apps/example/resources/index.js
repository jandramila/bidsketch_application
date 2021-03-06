import * as documents from 'resources/documents'
import * as person from 'resources/person'

const resources = {
  documents,
  person
}

export let reducers = {}
export let actionTypes = {}
export let actions = {}

for (let resourceKey of Object.keys(resources)) {
  const resource = resources[resourceKey]

  // Assign reducers.resource = resource.reducer
  reducers[resourceKey] = resource.reducer

  // Assign actionTypes.resource = resource.actionTypes
  actionTypes[resourceKey] = resource.actionTypes

  // Unpack all available actions for all resources
  actions = { ...actions, ...resource.actions }
}
