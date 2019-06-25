import React from 'react'
import renderApp from '../renderApp'

const app = () => (
  <div>This is the documents app</div>
)

renderApp({
  app,
  bodyClassName: 'documents'
})
