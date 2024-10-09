import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// route importations
import Start from './routes/Start.jsx';
import Login from './routes/Login.jsx';

const router = createBrowserRouter([
  {
    //LOGIN ROUTE
    path: '/',
    element: <Start />,
  },
  { //LOGIN ROUTE
    path: '/login',
    element: <Login />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
