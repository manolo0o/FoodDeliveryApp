import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// route importations
import Start from './routes/Start.jsx';
import Register from './routes/Register.jsx';
import Login from './routes/Login.jsx';
import Home from './routes/Home.jsx'; 

const router = createBrowserRouter([
  {
    //LOGIN ROUTE
    path: '/',
    element: <Start />,
  },
  { //REGISTER ROUTE
    path: '/register',
    element: <Register />,
  },
  { //LOGIN ROUTE
    path: '/login',
    element: <Login />,
  },
  { //HOME ROUTE
    path: '/home',
    element: <Home />,
  },
  { //HOME ROUTE
    path: '/product/:id',
    element: <Product />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
