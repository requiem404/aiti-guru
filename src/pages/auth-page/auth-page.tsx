import { SignInForm } from '@features/auth';
import { getClasses } from './styles/get-classes';

export const AuthPage = () => {
  const { cnRoot } = getClasses();

  return (
    <div className={cnRoot}>
      <SignInForm />
    </div>
  );
};
