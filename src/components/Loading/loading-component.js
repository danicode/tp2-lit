import { LitElement, html } from 'lit';
import { loadingComponentStyles } from './loading-component-styles.js';

export class LoadingComponent extends LitElement {
  static properties = {
    active: { type: Boolean, reflect: true }
  };

  static styles = loadingComponentStyles;

  render() {
    return html`
        <p>Cargando...</p>
        <!-- Puedes agregar un ícono aquí si lo prefieres -->
    `;
  }
}

customElements.define('loading-component', LoadingComponent);
