import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import '@dile/ui/components/nav/nav.js';
import '@dile/ui/components/menu-hamburger/menu-hamburger.js';
import '../../layouts/Auth/auth-layout.js';
import { AuthenticationMixin } from '../../mixins/authentication-mixin.js';
import { homePageStyles } from './home-page-styles.js';

export class HomePage extends AuthenticationMixin(LitElement) {
  static styles = homePageStyles;

  handleLogout() {
    this.logout();
    Router.go('/login');
  }

  render() {
    return html`
      <auth-layout>
        <dile-nav class="styled" slot="header" menu="right">
          <h2 slot="title">🧊 Home Page</h2>
          <dile-menu-hamburger slot="menu">
            <nav class="menu" slot="menu">
              <p @click="${ this.handleLogout }">💻 Logout</p>
            </nav>
          </dile-menu-hamburger>
          <span slot="actions">🤖 ${ this.username }</span>
        </dile-nav>
        <div class="container" slot="main">
          <img src="../../public/wallpaper.png" />
        </div>
        <p slot="footer">🚀 Powered by danicode</p>
      </auth-layout>
    `;
  }
}
customElements.define('home-page', HomePage);
