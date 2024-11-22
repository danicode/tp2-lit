import { css } from 'lit';

export const homePageStyles = css`
  :host {
    width: 100%;
    --dile-primary-color: #fff;
  }

  h2 {
    color: var(--primary-color);
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .styled {
    --dile-nav-background-color: #bbdefb;
    --dile-nav-color: #303030;
    --dile-nav-padding-y: 1rem;
    --dile-nav-padding-x: 1rem;
    color: #666;
  }

  .menu {
    color: var(--primary-color);
    font-weight: bold;
    cursor: pointer;
  }
`;
