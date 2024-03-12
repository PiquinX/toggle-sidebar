import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.tsx'
// import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>ERROR!!!!</div>,
    children: [
      {
        path: '/info',
        element: <div>Information</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
