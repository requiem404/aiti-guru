import type { InputHTMLAttributes } from 'react';
import { getClasses } from './styles/get-classes';
import { CheckIcon } from '@shared/icons/components/check-icon';

export type CheckboxProps = {
  label?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Checkbox = ({ label, className, id, ...props }: CheckboxProps) => {
  const checkboxId = id ?? `checkbox-${Math.random().toString(36).slice(2)}`;
  const { cnRoot, cnInput, cnLabel, cnBox } = getClasses({ className });

  return (
    <label htmlFor={checkboxId} className={cnRoot}>
      <input id={checkboxId} type="checkbox" className={cnInput} {...props} />
      <span className={cnBox}>{props.checked && <CheckIcon color={'var(--icon)'} />}</span>
      {label && <span className={cnLabel}>{label}</span>}
    </label>
  );
};
