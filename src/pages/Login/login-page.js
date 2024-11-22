import { LitElement, html, nothing } from 'lit';
import { Router } from '@vaadin/router';
import '../../layouts/Public/public-layout.js';
import '../../components/index.js';
import { loginPageStyles } from './login-page-styles.js';

export class LoginPage extends LitElement {

  constructor() {
    super();
    this.alertMessage = '';
    this.alertType = '';
  }

  static get properties() {
    return {
      alertType: { type: String },
      alertMessage: { type: String },
    };
  }

  handleLoginSuccess(event) {
    const { email } = event.detail;
    this.alertType = "success";
    this.alertMessage = `Login success for ${ email }`;

    Router.go('/home');
  }

  handleLoginValidation(event) {
    const { message } = event.detail;
    this.alertType = "warning";
    this.alertMessage = html`${ message || "" }`;
  }

  handleLoginError(event) {
    const { email, error } = event.detail;
    this.alertType = "error";
    this.alertMessage = `Login failed for ${ email } - ${ error || "" }`;
  }

  handleShowInfo(event) {
    this.alertType = "info";
    this.alertMessage = html`To log enter: <b>Email</b>: admin@admin.com and <b>Password</b>: admin`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('login:success', this.handleLoginSuccess.bind(this));
    this.addEventListener('login:error', this.handleLoginError.bind(this));
    this.addEventListener('login:validation', this.handleLoginValidation.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('login:success', this.handleLoginSuccess.bind(this));
    this.removeEventListener('login:error', this.handleLoginError.bind(this));
    this.removeEventListener('login:validation', this.handleLoginValidation.bind(this));
  }

  static styles = loginPageStyles;

  titleTemplate() {
    return html`
      <h1>🧊 Welcome!!! <span class="info" title="Information about this page" @click="${ this.handleShowInfo }">ℹ️</span></h1>
    `;
  }

  alertTemplate() {
    return html`
      ${ this.alertType 
        ? html`<alert-component .type=${ this.alertType } .message=${ this.alertMessage } ></alert-component>` 
        : nothing 
      }
    `;
  }

  render() {
    return html`
      <public-layout>
        ${ this.titleTemplate() }
        <login-component></login-component>
        ${ this.alertTemplate() }
      </public-layout>
    `;
  }
}
customElements.define('login-page', LoginPage);
