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
      primary: '#006dda',
      error: '#da3501',
    },
  },
  [ThemeType.Dark]: {
    type: ThemeType.Dark,
    color: {
      white: '#fff',
      black: '#000',
      text: '#fff',
      background: '#1f1f1f',
      border: '#444444',
      primary: '#00c4a9',
      error: '#d52c2c',
    },
  },
};
