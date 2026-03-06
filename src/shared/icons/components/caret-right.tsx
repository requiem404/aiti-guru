import type { FC, SVGProps } from 'react';
export const SvgCaretRight: FC<SVGProps<SVGSVGElement>> = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="#B2B3B9"
      d="m14.192 10.442-6.25 6.25a.626.626 0 0 1-.884-.884L12.866 10 7.058 4.192a.625.625 0 0 1 .884-.884l6.25 6.25a.626.626 0 0 1 0 .884"
    />
  </svg>
);
