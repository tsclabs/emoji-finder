import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { ToastProvider } from 'react-toast-notifications'
import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>    
    <ToastProvider autoDismissTimeout={10000}>
      <App />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// change to register() to enable the service-worker
serviceWorkerRegistration.unregister();
