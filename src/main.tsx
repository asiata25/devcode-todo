import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Activity, { loader as todoLoader } from './components/pages/Activity'
import ErrorPage from './components/pages/ErrorPage'
import {
  action as activityAction,
  Homescreen,
  loader as activitiesLoader,
} from './components/pages/Homescreen'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: activitiesLoader,
        action: activityAction,
        element: <Homescreen />,
      },
      { errorElement: <ErrorPage /> },
      {
        path: 'activity/:id',
        element: <Activity />,
        loader: todoLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
