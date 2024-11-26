import { LitElement, html } from 'lit';
import { AuthenticationMixin, FormMixin, DispatchCustomEventMixin } from '../../mixins/index.js';
import { loginComponentStyles } from './login-component-styles.js';

export class LoginComponent extends DispatchCustomEventMixin(FormMixin(AuthenticationMixin(LitElement))) {

  constructor() {
    super();
    this.validationSchema = {
      email: this.#validateEmail,
      password: this.#validatePassword
    };
  }

  // Estas propiedades, se transforman por default en atributos de la etiqueta
  static get properties() {
    return {
      email: { type: String },
      password: { type: String }
    };
  }

  static styles = loginComponentStyles;

  async handleSubmitLogin(event) {
    this.handleSubmit(event);
    this.dispatchCustomEvent('loading-start', {});
    const { email, password } = this.formData;
    const message = this.validateForm(email, password);
    if (message) {
      this.dispatchCustomEvent('login:validation', {
        message: message
      });
      this.dispatchCustomEvent('loading-end', {});
    } else {
      try {
        const response = await this.login(email, password);      
        if (response.success) {
          this.dispatchCustomEvent('login:success', {
            email: email
          });
          this.initProperties();
        } else {
          this.dispatchCustomEvent('login:error', {
            email: email
          });
        }
      } catch (error) {
        console.error(error);
        this.dispatchCustomEvent('login:error', {
          email: email
        });
      } finally {
        this.dispatchCustomEvent('loading-end', {});
      }
    }
  }

  #validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Email is required.\n';
    }
    if (!emailPattern.test(email)) {
      return 'Invalid email format.\n';
    }
    return '';
  }

  #validatePassword(password) {
    if (!password) {
      return 'Password is required.\n';
    }
    return '';
  }

  render() {
    return html`
      <form @submit=${ this.handleSubmitLogin } novalidate>
        <label for="email">Email <span class="required">*</span>:</label>
        <input type="email" 
          id="email" 
          name="email" 
          .value="${ this.formData.email }"
          @input="${ this.handleInputChange }"
        />

        <label for="password">Password <span class="required">*</span>:</label>
        <input type="password"
          id="password" 
          name="password" 
          .value="${ this.formData.password }"
          @input="${ this.handleInputChange }"
        />

        <button type="submit">Login</button>
      </form>
    `;
  }
}
customElements.define('login-component', LoginComponent);
