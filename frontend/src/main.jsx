import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeContextProvider from './context/ThemeContext.jsx'
import AuthContextProvider from './context/AuthConext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
        <div className='min-h-screen ' style={{fontFamily:"Roboto, sans-serif"}}>
          <ThemeContextProvider>
            <AuthContextProvider>
              <App/>  
            </AuthContextProvider>
          </ThemeContextProvider>
        </div>
     </BrowserRouter>
  </StrictMode>,
)
