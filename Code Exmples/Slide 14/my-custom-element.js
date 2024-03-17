// my-custom-element.js
// Define the custom element using the CustomElementRegistry.define method
class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        
        // Create a shadow DOM for the element
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a paragraph element and set its text content
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Hello from My Custom Element!';

        // Append the paragraph to the shadow DOM
        shadow.appendChild(paragraph);
    }
}

// Define the custom element with the tag name 'my-custom-element'
customElements.define('my-custom-element', MyCustomElement);
