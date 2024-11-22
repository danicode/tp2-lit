import { css } from 'lit';

export const notFoundPageStyles = css`
  :host {
    display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
      color: white;
  }

  label { 
    color: var(--terciary-color);
    cursor: pointer;
    font-weight: bold;
  }
  label:hover { 
    color: white;
  }

  .go {
    font-size: 25px;
  }
`;