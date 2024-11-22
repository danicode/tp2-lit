import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { routerAppStyles } from './router-app-styles.js';

export class RouterApp extends LitElement {
  firstUpdated() {
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      { path: '/home', component: 'home-page' },
      { path: '/login', component: 'login-page' },
      { path: '(.*)', component: 'not-found-page' } // Ruta 404
    ]);
  }

  static styles = routerAppStyles;

  render() {
    return html`
      <div id="outlet"></div>
    `;
  }
}
customElements.define('router-app', RouterApp);
