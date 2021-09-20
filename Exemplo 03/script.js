class ContadorElement extends HTMLElement{
    constructor(){
        super();

        //criar shadow
        this.attachShadow( {mode: "open"});
        //variavel do contator
        let counter = 0;
        //criar elemento
        const spanE1 = document.createElement("span");
        spanE1.textContent = counter;
        
        const constrolsE1  = document.createElement("div");

        const incrementE1 = document.createElement("button");
        incrementE1.textContent="Incrementar";
        incrementE1.addEventListener("click", ()=>{
            counter++;
            spanE1.textContent = counter;
        });

        const decrementE1 = document.createElement("button");
        decrementE1.textContent="Decrementar";
        decrementE1.addEventListener("click", ()=>{
            counter--;
            spanE1.textContent=counter;
        });

        constrolsE1.append(incrementE1, decrementE1);

        /*
        Primeira opção de inserir CSS
        const styleE1 = document.createElement("style");
        styleE1.textContent=`
        button{
            margin-left: 1em;
        }
        `
         */
        const linkE1 = document.createElement("link");
        linkE1.setAttribute("href", "/Exemplo 03/estilos.css");
        linkE1.setAttribute("rel", "stylesheet");

        this.shadowRoot.append(linkE1, spanE1, constrolsE1)
    }
}

customElements.define("meu-contador", ContadorElement);