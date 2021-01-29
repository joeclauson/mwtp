import { html, LitElement } from "lit-element";
import '@jixer/mwtf';

export class PanelHello extends LitElement {
    render() {
        return html`<middle-component></middle-component>|<right-component></right-component>|<left-component></left-component>`;
    }
}

$APP.register('hello-page', PanelHello);

$APP.start();