import { LitElement, css, html } from 'lit';

export class PdfmeGenerator extends LitElement {
  static properties = {
    name: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
      :host {
      }
    `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = 'World';
  }

  // Render the UI as a function of component state
  render() {
    return html`<button @click="${this._generatePdf}">Generate PDF</button>`;
  }

  _generatePdf() {
    alert();
    console.log('_generatePdf !!');
  }
}

customElements.define('pdfme-generator', PdfmeGenerator);
