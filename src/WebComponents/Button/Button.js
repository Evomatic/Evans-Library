
//Button web component 
class Button extends HTMLElement {

    // A getter/setter for a disabled property.
    set disabled(value) {
        const isDisabled = Boolean(value);
        if (isDisabled)
          this.shadowRoot.getElementById('toggle').setAttribute('disabled', '');
        else
        this.shadowRoot.getElementById('toggle').removeAttribute('disabled');
      }
  
      get disabled() {
        return this.shadowRoot.getElementById('toggle').hasAttribute('disabled');
      }


  constructor() {
    super();

const template = document.createElement('template');
 
template.innerHTML = `
  <style>
  :host([disabled]) {
    background: red;
    background-size: contain;
  }
 
    button {
      display: block;
      overflow: hidden;
      position: relative;
      padding: 0 16px;
      font-size: 16px;
      font-weight: bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      outline: none;
 
      width: 100%;
      height: 40px;
 
      box-sizing: border-box;
      border: 1px solid #a1a1a1;
      background: #ffffff;
      box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.05), 0 2px 8px 0 rgba(161,161,161, 0.4);
      color: #363636;
      cursor: pointer;
    }
  </style>
 
  <div class="container">
    <button id="toggle" name></button>
  </div>
`;
 
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$button = this.shadowRoot.getElementById('toggle').getAttribute('disabled');
    this.$button = this.shadowRoot.getElementById('toggle').getAttribute('name');
  }

  static get observedAttributes() {
    return ['name', 'disabled']
}

render() {
    this.$button.setAttribute('name');
    this.$button.setAttribute('disabled', '');
 }

 attributeChangedCallback(attrName, oldVal, newVal) {
    this[attrName] = newVal;
    this.render();
    
}
}





 
window.customElements.define('my-button', Button);

export default Button;