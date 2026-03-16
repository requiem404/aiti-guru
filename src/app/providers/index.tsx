import { RouterProvider } from 'react-router';
import { TanstackProvider } from './tanstack';
import { router } from './router';
import { ModalProvider } from 'react-modal-hook';

export const Providers = () => (
  <>
    <ModalProvider>
      <TanstackProvider>
        <RouterProvider router={router} />
      </TanstackProvider>
    </ModalProvider>
  </>
);
