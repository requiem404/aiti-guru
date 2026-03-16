import type { FC, SVGProps } from 'react';
export const SvgUserIcon: FC<SVGProps<SVGSVGElement>> = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <circle cx={12} cy={7.25} r={4} stroke="#C9C9C9" strokeWidth={2} />
    <path stroke="#CACACA" strokeWidth={2} d="M9 13.75h6a3 3 0 0 1 3 3v4H6v-4a3 3 0 0 1 3-3Z" />
  </svg>
);
