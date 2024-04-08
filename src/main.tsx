import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom'
import { Error } from './components/globals/Error.tsx'
import { LandingPage } from './components/landingPage/LandingPage.tsx'


// Create router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
