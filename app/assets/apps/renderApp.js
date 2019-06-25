import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

const renderApp = ({
  app: Component,
  store = null,
  bodyClassName = '',
})  => {
  document.body.className = bodyClassName
  const app = store
    ? (
      <Provider store={store}>
        <Component />
      </Provider>
    )
    : <Component />

  ReactDOM.render(app, document.getElementById('root'))
}

export default renderApp
