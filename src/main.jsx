import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider } from 'easy-peasy'

import App from './App'
import Interceptors from './utils/interceptor'
import store from './store'
import './assets/styles/app.less'

Interceptors.setupInterceptors(store)

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
)
