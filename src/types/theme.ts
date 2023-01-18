export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    primaryOffset: string;
    secondary: string;
    secondaryOffset: string;
    tertiary: string;
    tertiaryOffset: string;
    quaternary: string;
    quinary: string;
  };
  isDarkType: boolean;
}
