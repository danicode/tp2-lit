import { login as authServiceLogin } from '../services/auth-service.js';

export const AuthenticationMixin = (superclass) => class extends superclass {
  static get properties() {
    return {
      username: { type: String }
    };
  }

  constructor() {
    super();
    this.username = localStorage.getItem('username') || 'Guest';
  }

  login(email, password) {
    const token = authServiceLogin(email, password);
    if (token) {
      localStorage.setItem('authToken', token);
      localStorage.setItem('username', email);
    }
    return token;
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
  }

  isAuthenticated() {
    return !!localStorage.getItem('authToken');
  }
}
