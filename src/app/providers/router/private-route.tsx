import { useUserStore } from '@entities/user';
import { APP_ROUTES } from '@shared/constants';
import { Navigate, Outlet } from 'react-router';

export const PrivateRoute = () => {
  const token = useUserStore(state => state.token);

  if (!token) {
    return <Navigate to={APP_ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
};
