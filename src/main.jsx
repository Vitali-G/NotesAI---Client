import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <App /> 
      {/* // putting it here just for testing */}
      </BrowserRouter>
  </>
)

//</React.StrictMode> was sending a double API request to chatGPT which was confusing
