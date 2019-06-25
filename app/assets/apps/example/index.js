import renderApp from '../renderApp'
import app from './components'
import store from './store'

renderApp({
  app,
  store,
  bodyClassName: 'example'
})
