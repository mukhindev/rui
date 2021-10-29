import { rgba } from 'polished';

const defaultOptions = {
  color: '#000',
  thicknessInside: 2,
  thicknessOutside: 4,
};

export const makeDoubleOutline = (value: string | Partial<typeof defaultOptions>) => {
  const options = defaultOptions;

  if (typeof value === 'string') {
    options.color = value;
  } else {
    Object.assign(options, value);
  }

  return `
    box-shadow:
      inset 0 0 0 ${options.thicknessInside}px ${options.color},
      0 0 0 ${options.thicknessOutside}px ${rgba(options.color, 0.25)}
  `;
};
