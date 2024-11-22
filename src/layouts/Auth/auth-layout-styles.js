import { css } from 'lit';

export const authLayoutStyles = css`
  :host {
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 100%;
    min-height: 100vh;
  }

  header {
    background-color: #fff;
  }

  main {
    padding: 16px;
  }

  footer {
    color: var(--terciary-color);
    text-align: center;
  }
`;
