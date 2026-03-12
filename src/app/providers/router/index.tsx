import { createBrowserRouter, Navigate } from 'react-router';
import { AuthPage } from '@pages/auth-page';
import { PrivateRoute } from './private-route';
import { PublicRoute } from './public-route';
import { HomePage } from '@pages/home-page';
import { APP_ROUTES } from '@shared/constants';

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: APP_ROUTES.LOGIN,
        element: <AuthPage />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: APP_ROUTES.HOME,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
