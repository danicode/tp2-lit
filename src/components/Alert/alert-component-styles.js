import { css } from 'lit';

export const alertComponentStyles = css`
  :host {
    display: block;
    padding: 8px;
    margin: 8px 0;
    border-radius: 4px;
  }

  .alert {
    padding: 8px 32px;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    background-color: var(--bg-primary, blue);
    position: relative;
  }

  .error {
    background-color: var(--bg-error, red);
  }

  .success {
    background-color: var(--bg-success, green);
  }

  .warning {
    background-color: var(--bg-warning, yellow);
  }

  .info {
    background-color: var(--bg-info, #00bcd4);
  }

  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: none;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
`;
