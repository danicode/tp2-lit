import { css } from 'lit';

export const loginPageStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  h1 {
    color: var(--terciary-color);
  }

  .info {
    cursor: pointer;
  }
`;