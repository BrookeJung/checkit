import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css'
//redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './modules'
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { BrowserRouter } from 'react-router-dom'
/* 0. create redux store -> reducers ->'actions - actionType' | applyMiddleware()
 */
const logger = createLogger()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
)

//provide the store to react

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)

serviceWorker.unregister()
