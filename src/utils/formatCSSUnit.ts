import { CSSUnit } from '@/types';

export const formatCSSUnit = (value?: CSSUnit) => {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value === 'number') {
    return value !== 0 ? `${value}rem` : 0;
  }

  if (value.includes('/')) {
    const [size, fontSize] = value.split('/');
    return `${+size / +fontSize}rem`;
  }

  return value;
};
