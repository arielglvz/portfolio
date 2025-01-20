import { createBrowserRouter } from 'react-router-dom';

// Pages
import ClientPage from '../pages/client';
import NotFoundPage from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path : '/',
    element : <ClientPage />, 
    errorElement : <NotFoundPage />
  },
])