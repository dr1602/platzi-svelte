import { Global, css } from '@emotion/react'

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        background: ${ p => p.theme.bg}
    }
`;
