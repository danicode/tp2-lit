import { css } from 'lit';

export const loadingComponentStyles = css`
  :host {
    display: none;
    text-align: center;
    padding: 16px;
    color: white;
    background-color: #03A9F4;
    border-radius: 8px;
    font-size: 20px;
    box-shadow: 0px 6px 7px 0px #00BCD4;
  }
  :host([active]) {
    display: block;
  }
`;
