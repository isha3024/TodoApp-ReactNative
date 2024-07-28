export const color = {
  primary: '#222831',
  secondary: '#1A3636',
  darkGrey: '#40534C',
  lightGrey: '#677D6A',
  cream: '#D6BD98',
  creamLight: '#D6BD98B3',
  red: '#781F19',
  transparent: 'rgba(0,0,0,0)',
  semiTransBlack: 'rgba(0, 0, 0, 0.5)',
  customTransparent: opacity => `rgba(0, 0, 0,${opacity ?? 1})`,
  customWhite: opacity => `rgba(255, 255, 255,${opacity ?? 1})`,
  customBlack: opacity => `rgba(0, 0, 0,${opacity ?? 1})`,
};
