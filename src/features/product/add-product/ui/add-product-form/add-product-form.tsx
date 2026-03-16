import { Input } from '@shared/ui/input';
import { getClasses } from './styles/get-classes';
import type { FC } from 'react';
import { Button } from '@shared/ui/button';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export type AddProductFormProps = {
  closeForm: () => void;
};

const addProductSchema = z.object({
  name: z.string().min(1, 'Название обязательно'),
  description: z.string().min(1, 'Описание обязательно'),
  price: z.string().min(1, 'Цена обязательна'),
  quantity: z.string().min(1, 'Количество обязательно'),
});

type AddProductFormData = z.infer<typeof addProductSchema>;

export const AddProductForm: FC<AddProductFormProps> = ({ closeForm }) => {
  const { cnRoot, cnTitle, cnControls, cnButtons } = getClasses();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductFormData>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      name: '',
      description: '',
      price: '',
      quantity: '',
    },
  });

  const handleAddProduct = () => {
    closeForm();
    alert('Продукт добавлен успешно!🎉');
  };

  return (
    <div className={cnRoot}>
      <div className={cnTitle}>Добавить продукт</div>
      <div className={cnControls}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input label="Название" errorMessage={errors.name?.message} {...field} />}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => <Input label="Описание" errorMessage={errors.description?.message} {...field} />}
        />
        <Controller
          name="price"
          control={control}
          render={({ field }) => <Input label="Цена" errorMessage={errors.price?.message} {...field} />}
        />
        <Controller
          name="quantity"
          control={control}
          render={({ field }) => <Input label="Количество" errorMessage={errors.quantity?.message} {...field} />}
        />{' '}
        <div className={cnButtons}>
          <Button onClick={closeForm} variant="secondary">
            Отмена
          </Button>
          <Button onClick={handleSubmit(handleAddProduct)}>Добавить</Button>
        </div>
      </div>
    </div>
  );
};
