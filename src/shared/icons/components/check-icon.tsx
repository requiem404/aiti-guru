import type { FC, SVGProps } from 'react';

export const CheckIcon: FC<SVGProps<SVGSVGElement>> = ({ color = 'currentColor', ...props }) => (
  <svg className="checkbox__check" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M10 3L4.5 8.5L2 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
