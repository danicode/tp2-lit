import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { AuthenticationMixin } from '../../mixins/authentication-mixin.js';
import { authLayoutStyles } from './auth-layout-styles.js';
import '../../components/Loading/loading-component.js';

export class AuthLayout extends AuthenticationMixin(LitElement) {

  constructor() {
    super();
    this.loading = false;
  }

  static get properties() {
    return {
      loading: { type: Boolean },
    };
  }

  static styles = authLayoutStyles;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('loading-auth:start', this.showLoadingAuth.bind(this));
    this.addEventListener('loading-auth:end', this.hideLoadingAuth.bind(this));
    if (!this.isAuthenticated()) {
      Router.go('/login');
    }
  }

  disconnectedCallback() {
    this.removeEventListener('loading-auth:start', this.showLoadingAuth);
    this.removeEventListener('loading-auth:end', this.hideLoadingAuth);
    super.disconnectedCallback();
  }

  showLoadingAuth(event) {
    console.log('showLoading');
    this.loading = true;
  }

  hideLoadingAuth(event) {
    console.log('hideLoading');
    this.loading = false;
  }

  loadingTemplateAuth() {
    return html`
      <loading-component ?active="${ this.loading }"></loading-component>
    `;
  }

  render() {
    return html`
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        ${ this.loadingTemplateAuth() }
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
  }
}
customElements.define('auth-layout', AuthLayout);
