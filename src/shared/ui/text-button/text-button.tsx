import type { ButtonHTMLAttributes } from 'react';
import { getClasses } from './styles/get-classes';

export type TextButtonProps = {
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const TextButton = ({ text, className, onClick, ...props }: TextButtonProps) => {
  const { cnRoot, cnText } = getClasses({ className });

  return (
    <button type="button" className={cnRoot} onClick={onClick} {...props}>
      <span className={cnText}>{text}</span>
    </button>
  );
};
