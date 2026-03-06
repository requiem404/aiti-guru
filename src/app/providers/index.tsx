import { RouterProvider } from 'react-router';
import { TanstackProvider } from './tanstack';
import { router } from './router';

export const Providers = () => (
  <>
    <TanstackProvider>
      <RouterProvider router={router} />
    </TanstackProvider>
  </>
);
