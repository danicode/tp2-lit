import { LitElement, html, nothing } from 'lit';
import { alertComponentStyles } from './alert-component-styles.js';

export class AlertComponent extends LitElement {

  static get properties() {
    return {
      type: { type: String },
      message: { type: String },
      visible: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.visible = true; // El componente es visible por defecto
  }

  static styles = alertComponentStyles;

  handleClose() {
    this.visible = false;
  }

  updated(changedProperties) {
    if (changedProperties.has('message')) {
      this.visible = true;
    }
  }

  render() {
    return this.visible ? html`
      <div class="alert ${ this.type }">
        ${ this.message }
        <button class="close-btn" @click="${ this.handleClose }">&times;</button>
      </div>
    ` : nothing;
  }
}
customElements.define('alert-component', AlertComponent);
