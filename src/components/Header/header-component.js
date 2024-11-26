import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import '@dile/ui/components/nav/nav.js';
import '@dile/ui/components/menu-hamburger/menu-hamburger.js';
import { headerComponentStyles } from './header-component-styles.js';
import { AuthenticationMixin, DispatchCustomEventMixin } from '../../mixins/index.js';

export class HeaderComponent extends DispatchCustomEventMixin(AuthenticationMixin(LitElement)) {
  static styles = headerComponentStyles;

  async handleLogout() {
    this.dispatchCustomEvent('loading-auth:start', {});
    const success = await this.logout();
    if (success) {
      this.dispatchCustomEvent('loading-auth:end', {});
      Router.go('/login');
    }
  }

  render() {
    return html`
      <dile-nav class="styled" slot="header" menu="right">
        <h2 slot="title">🧊 Home Page</h2>
        <dile-menu-hamburger slot="menu">
          <nav class="menu" slot="menu">
            <p @click="${ this.handleLogout }">💻 Logout</p>
          </nav>
        </dile-menu-hamburger>
        <span slot="actions">🤖 ${ this.username }</span>
      </dile-nav>
    `;
  }
}
customElements.define('header-component', HeaderComponent);
