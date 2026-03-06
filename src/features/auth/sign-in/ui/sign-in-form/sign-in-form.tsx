import { zodResolver } from '@hookform/resolvers/zod';
import { SvgCancel } from '@shared/icons/components/cancel';
import { SvgEye } from '@shared/icons/components/eye';
import { SvgEyeOff } from '@shared/icons/components/eye-off';
import { SvgLock } from '@shared/icons/components/lock';
import { SvgUserIcon } from '@shared/icons/components/user-icon';
import { Button } from '@shared/ui/button';
import { Checkbox } from '@shared/ui/checkbox';
import { Input } from '@shared/ui/input';
import { TextButton } from '@shared/ui/text-button';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { signInSchema, type SignInFormData } from './lib/sign-in-form-schema';
import { getClasses } from './styles/get-classes';
import { SvgAitiLogo } from '@shared/icons/components/aiti-logo';
import { useMutation } from '@tanstack/react-query';
import { userApi, type LoginCredentials, useUserStore } from '@entities/user';

//TODO: вернуться закончить верстку
export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUserData } = useUserStore();

  const { cnRoot, cnLogo, cnTitle, cnDescription, cnInputs, cnCheckbox, cnButton, cnOr, cnNoAccount, cnContent } =
    getClasses();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onChange',
    defaultValues: {
      login: '',
      password: '',
      rememberMe: false,
    },
  });

  const login = useMutation({
    mutationFn: async (credentials: LoginCredentials & { rememberMe: boolean }) => userApi.login(credentials),
    onSuccess: (data, variables) => {
      setUserData(data.accessToken, variables.rememberMe);
    },
    onError: error => {
      if (!!error.message) {
        setError('login', { message: error.message });
        return;
      }
      setError('login', { message: 'Unexpected Error' });
    },
  });

  const onSubmit = handleSubmit(async (values: SignInFormData) => {
    try {
      login.mutate({
        username: values.login,
        password: values.password,
        rememberMe: values.rememberMe,
      });
    } catch (err) {}
  });

  return (
    <div className={cnRoot}>
      <div className={cnContent}>
        <SvgAitiLogo className={cnLogo} />
        <h2 className={cnTitle}>Добро пожаловать!</h2>
        <p className={cnDescription}>Пожалуйста, авторизируйтесь</p>
        <div className={cnInputs}>
          <Controller
            name="login"
            control={control}
            render={({ field }) => (
              <Input
                label="Логин"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                placeholder="test"
                leftIcon={<SvgUserIcon />}
                rightIcon={<SvgCancel />}
                onRightIconClick={() => field.onChange('')}
                errorMessage={errors.login?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                label="Пароль"
                type={showPassword ? 'text' : 'password'}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                placeholder="••••••••••"
                leftIcon={<SvgLock />}
                rightIcon={showPassword ? <SvgEyeOff /> : <SvgEye />}
                onRightIconClick={() => setShowPassword(!showPassword)}
                errorMessage={errors.password?.message}
              />
            )}
          />
        </div>
        <div className={cnCheckbox}>
          <Controller
            name="rememberMe"
            control={control}
            render={({ field }) => (
              <Checkbox
                label="Запомнить данные"
                checked={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        <Button className={cnButton} onClick={onSubmit} disabled={!isValid}>
          Войти
        </Button>
        <p className={cnOr}>или</p>
        <p className={cnNoAccount}>
          <span>Нет аккаунта?</span>
          <TextButton text="Создать" />
        </p>
      </div>
    </div>
  );
};
