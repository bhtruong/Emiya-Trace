const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: block;
            contain: content;
        }
    </style>
    Legendary
`;

export default class CardSet extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log('CardSet connected to page.');
    }
}