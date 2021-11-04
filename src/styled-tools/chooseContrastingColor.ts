import { getContrast } from 'polished';

export const chooseContrastingColor = (colors: string[], backgroundColor: string) => {
  let contrast = 0;
  let matchingColor = colors[0];

  colors.forEach((color) => {
    const currentContrast = getContrast(color, backgroundColor);

    if (currentContrast > contrast) {
      contrast = currentContrast;
      matchingColor = color;
    }
  });

  return matchingColor;
};
