import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<DefaultProps>`

body {
    margin: 0;
    font-family:"Regular", "sans-serif";
    background: var(--body);

    button {
      cursor: pointer;
    }
}

:root{
    --body: ${(props) => props.theme.body};
    }

`

export interface DefaultProps {
  theme: Itheme
}

export interface Itheme {
  body: string
}

export default GlobalStyle
