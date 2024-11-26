import { login as authServiceLogin, logout as authServiceLogout } from '../services/auth-service.js';

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

  async login(email, password) {
    try {
      const response = await authServiceLogin(email, password);
      if (response.success) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('username', email);
      }
      return response;
    } catch (error) {
      console.error('login error');
      throw error;
    }
  }

  async logout() {
    try {
      const response = await authServiceLogout();
      if (response.success) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
      }
      return response;
    } catch (error) {
      throw error;
    }
  }

  isAuthenticated() {
    return !!localStorage.getItem('authToken');
  }
}
