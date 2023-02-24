import { LitElement, css, html } from 'lit';
import templateJson from './template.json';
import { generate } from '@pdfme/generator';

export class PdfmeGenerator extends LitElement {
  static properties = {
    template: {},
    inputs: [],
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
      :host {
      }
    `;

  constructor() {
    super();
    // Declare reactive properties
  }

  async _generatePdf() {
    const template = templateJson;
    const inputs = [
      {
        name: 'Pet Name?!',
        age: '4 years',
        sex: 'Male',
        weight: '33 pounds',
        breed: 'Mutt',
        owner: 'https://pdfme.com/',
      },
    ];

    const pdf = await generate({ template, inputs });
    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    window.open(URL.createObjectURL(blob));
  }

  render() {
    return html`<button @click="${this._generatePdf}">Generate PDF</button>`;
  }
}

customElements.define('pdfme-generator', PdfmeGenerator);
