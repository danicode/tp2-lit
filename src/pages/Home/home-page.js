import { LitElement, html } from 'lit';
import '../../layouts/Auth/auth-layout.js';
import { homePageStyles } from './home-page-styles.js';
import '../../components/Header/header-component.js';

export class HomePage extends LitElement {
  static styles = homePageStyles;

  headerTemplate() {
    return html`<header-component slot="header"></header-component>`;
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
