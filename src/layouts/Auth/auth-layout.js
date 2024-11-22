import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { AuthenticationMixin } from '../../mixins/authentication-mixin.js';
import { authLayoutStyles } from './auth-layout-styles.js';

export class AuthLayout extends AuthenticationMixin(LitElement) {

  connectedCallback() {
    super.connectedCallback();
    if (!this.isAuthenticated()) {
      Router.go('/login');
    }
  }

  static styles = authLayoutStyles;

  render() {
    return html`
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
  }
}
customElements.define('auth-layout', AuthLayout);
