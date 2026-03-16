import { Input } from '@shared/ui/input';
import { getClasses } from './styles/get-classes';
import { SvgSearch } from '@shared/icons/components/search';
import { Dashboard } from '@widgets/dashboard';
import { useGetProducts } from '@features/product/get-products';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '@shared/ui/button';
import { useUserStore } from '@entities/user';

export const HomePage = () => {
  const { cnRoot, cnHeader, cnTitle } = getClasses();
  const {
    page,
    totalPages,
    productsData,
    isLoading,
    isFetching,
    sortBy,
    sortOrder,
    goToPage,
    handleSearch,
    handleSort,
  } = useGetProducts();
  const { setUserData } = useUserStore();

  const logout = () => {
    setUserData(null, false);
  };

  const { control } = useForm({
    defaultValues: {
      search: '',
    },
  });

  return (
    <div className={cnRoot}>
      <header className={cnHeader}>
        <h2 className={cnTitle}>Товары</h2>
        <Controller
          name="search"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              leftIcon={<SvgSearch />}
              placeholder="Найти"
              value={value}
              onChange={e => {
                onChange(e);
                handleSearch(e.target.value);
              }}
            />
          )}
        />

        <Button onClick={() => logout()} size="small" variant="secondary">
          Выйти
        </Button>
      </header>

      <Dashboard
        sortBy={sortBy}
        sortOrder={sortOrder}
        pageNumber={page}
        pageCount={totalPages}
        productsData={productsData}
        handleSort={handleSort}
        setPage={goToPage}
        isLoading={isLoading}
      />
    </div>
  );
};
