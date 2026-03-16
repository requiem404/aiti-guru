import type { FC } from 'react';
import { getClasses } from './styles/get-classes';


type CheckboxProps = {
  checked: boolean;
  ariaLabel: string;
  onClick: () => void;
};

export const DashboardCheckbox: FC<CheckboxProps> = ({ checked, ariaLabel, onClick }) => {
  const { cnRoot } = getClasses({ checked });

  return (
    <button
      type="button"
      className={cnRoot}
      onClick={onClick}
      aria-label={ariaLabel}
    />
  );
}

