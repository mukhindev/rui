export enum ThemeType {
  Light = 'light',
  Dark = 'dark'
}

export const themes = {
  [ThemeType.Light]: {
    type: ThemeType.Light,
    color: {
      white: '#fff',
      black: '#000',
      text: '#000',
      background: '#fff',
      border: '#cecece',
      primary: '#007bff',
      error: '#da3501',
    },
  },
  [ThemeType.Dark]: {
    type: ThemeType.Dark,
    color: {
      white: '#fff',
      black: '#000',
      text: '#fff',
      background: '#000',
      border: '#cecece',
      primary: '#48a0ff',
      error: '#ff541e',
    },
  },
};
