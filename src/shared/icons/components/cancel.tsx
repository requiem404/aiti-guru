import type { FC, SVGProps } from 'react';
export const SvgCancel: FC<SVGProps<SVGSVGElement>> = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={17} height={18} fill="none" viewBox="0 0 17 18" {...props}>
    <path stroke="#C9C9C9" strokeLinecap="round" strokeWidth={2} d="m1.01 1 14 16M15 1 1 17" />
  </svg>
);
