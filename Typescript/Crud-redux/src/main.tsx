import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './Components/App'
import { store } from './Store'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
