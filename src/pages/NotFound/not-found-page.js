import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { notFoundPageStyles } from './not-found-page-styles.js';

export class NotFoundPage extends LitElement {
  static styles = notFoundPageStyles;

  handleGoHome() {
    Router.go('/home');
  }

  render() {
    return html`
      <h1>👻 404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <label @click="${ this.handleGoHome }"><span class="go">🎃</span> Go to Home</label>
    `;
  }
}

customElements.define('not-found-page', NotFoundPage);
