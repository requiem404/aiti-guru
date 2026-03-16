const template = ({ componentName, interfaces, jsx }, { tpl }) => {
  const componentNameWithType = `${componentName}: FC<SVGProps<SVGSVGElement>>`;

  return tpl`
    import { FC, SVGProps } from 'react';

    ${interfaces};

    export const ${componentNameWithType} = ({ color = 'currentColor', ...props }) => (
      ${jsx}
    );
  `;
};

module.exports = template;
