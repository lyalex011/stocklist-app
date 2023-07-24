import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { FamilyProvider } from './AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <FamilyProvider>
      <Router>
        <App />
      </Router> 
  </FamilyProvider>
  // {/* </React.StrictMode>, */}
)
