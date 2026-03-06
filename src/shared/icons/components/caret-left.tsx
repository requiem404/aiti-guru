import type { FC, SVGProps } from 'react';
export const SvgCaretLeft: FC<SVGProps<SVGSVGElement>> = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="#B2B3B9"
      d="M12.942 15.808a.624.624 0 1 1-.884.884l-6.25-6.25a.625.625 0 0 1 0-.884l6.25-6.25a.625.625 0 0 1 .884.884L7.134 10z"
    />
  </svg>
);
