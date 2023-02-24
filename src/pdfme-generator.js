import { LitElement, css, html } from 'lit';
import { generate } from '@pdfme/generator';

export class PdfmeGenerator extends LitElement {
  static properties = {
    template: { type: Object },
    inputs: { type: Array },
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
      :host {
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;

  constructor() {
    super();
    this.template = {};
    this.inputs = [];
  }

  async _generatePdf() {
    console.log(this.template);
    console.log(this.inputs);

    const pdf = await generate({
      template: this.template,
      inputs: this.inputs,
    });
    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    window.open(URL.createObjectURL(blob));
  }

  render() {
    return html`<button @click="${this._generatePdf}">Generate PDF</button>`;
  }
}

customElements.define('pdfme-generator', PdfmeGenerator);
