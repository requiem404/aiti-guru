import type { FC, SVGProps } from 'react';
export const SvgDotsHorizontal: FC<SVGProps<SVGSVGElement>> = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none" viewBox="0 0 26 26" {...props}>
    <path
      fill="#B2B3B9"
      d="M13 0a13 13 0 1 0 13 13A13.013 13.013 0 0 0 13 0m0 24a11 11 0 1 1 11-11 11.01 11.01 0 0 1-11 11m1.5-11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
);
