import { css } from 'lit';

export const headerComponentStyles = css`
  :host {
    --dile-primary-color: #fff;
  }

  h2 {
    color: var(--primary-color);
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
