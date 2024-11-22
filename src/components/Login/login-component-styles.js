import { css } from 'lit';

export const loginComponentStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  .required {
    color: var(--bg-error);
  }

  form {
    background-color: #a9b9c9;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 400px;
    max-width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
    padding: 16px;
  }

  input[type="email"],
  input[type="password"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 5px;
    font-weight: bolder;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    border: none;
  }

  button:hover {
    background: var(--terciary-color);
    color: var(--primary-color);
  }
`;
