import { createBrowserRouter } from 'react-router';
import { AuthPage } from '@pages/auth-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
  },
]);
