import { createBrowserRouter } from 'react-router-dom';

// Pages
import ClientPage from '../pages/client';
import NotFoundPage from '../pages/NotFound';
import AdminPage from '../pages/admin';
import Login from '../pages/Login';

export const router = createBrowserRouter([
  {
    path : '/',
    element : <ClientPage />, 
    errorElement : <NotFoundPage />
  },
  {
    path : '/admin',
    element : <AdminPage />, 
    errorElement : <NotFoundPage />
  },
  {
    path : '/login',
    element : <Login />, 
    errorElement : <NotFoundPage />
  },
])