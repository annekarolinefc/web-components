const tpl = document.createElement("template");
tpl.innerHTML = `
<style>
            :host{
                display: block; 
                background-color: #666;
                color: white;
                padding: 1em;
                margin: 1em;
            }
            h2{
                color: pink;
            }
        </style>
        
        <slot name="titulo">
            <h2>Este é o titulo padrão</h2>
        </slot>
        <p>Aqui vai o conteúdo do elemento: </p>
        <slot name="conteudo"></slot>
`

class HelloWorldElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.append(tpl.content.cloneNode(true));
    }
}
customElements.define("hello-world", HelloWorldElement);