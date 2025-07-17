import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-track-view')
export class LitTrackView extends LitElement {
  @property({ type: Array })
  tracks: any[] = [];

  static styles = css`
    :host {
      display: block;
    }
    /* Additional styles can be added here */
  `;

  render() {
    return html`<div>Track count: ${this.tracks.length}</div>`;
  }
}
