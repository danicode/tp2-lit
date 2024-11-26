import { LitElement, html } from 'lit';
import { publicLayoutStyles } from './public-layout-styles.js';
import '../../components/Loading/loading-component.js';

export class PublicLayout extends LitElement {

  constructor() {
    super();
    this.loading = false;
  }

  static get properties() {
    return {
      loading: { type: Boolean },
    };
  }

  static styles = publicLayoutStyles;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('loading-start', this.showLoading.bind(this));
    this.addEventListener('loading-end', this.hideLoading.bind(this));
  }

  disconnectedCallback() {
    this.removeEventListener('loading-start', this.showLoading);
    this.removeEventListener('loading-end', this.hideLoading);
    super.disconnectedCallback();
  }

  showLoading(event) {
    console.log('showLoading', event);
    this.loading = true;
  }

  hideLoading(event) {
    this.loading = false;
  }

  loadingTemplate() {
    return html`
      <loading-component ?active="${ this.loading }"></loading-component>
    `;
  }

  render() {
    return html`
      <div>
        ${ this.loadingTemplate() }
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('public-layout', PublicLayout);
