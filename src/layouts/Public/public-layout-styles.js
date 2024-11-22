import { css } from 'lit';

export const publicLayoutStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: var(--primary-color);
    width: 100%;
    height: 100vh;
  }
`;
