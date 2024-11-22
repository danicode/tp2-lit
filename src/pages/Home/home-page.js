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

  headerTemplate() {
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

  mainTemplate() {
    return html`<div class="container" slot="main">
      <img src="../../public/wallpaper.png" />
    </div>`;
  }

  footerTemplate() {
    return html`
      <p slot="footer">🚀 Powered by danicode</p>
    `;
  }

  render() {
    return html`
      <auth-layout>
        ${ this.headerTemplate() }
        ${ this.mainTemplate() }
        ${ this.footerTemplate() }
      </auth-layout>
    `;
  }
}
customElements.define('home-page', HomePage);
