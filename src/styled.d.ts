import { ThemeType } from './styles/themes/index'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}