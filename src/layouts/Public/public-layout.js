import { LitElement, html } from 'lit';
import { publicLayoutStyles } from './public-layout-styles.js';

export class PublicLayout extends LitElement {
  static styles = publicLayoutStyles;

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('public-layout', PublicLayout);
