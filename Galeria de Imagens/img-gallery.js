const tpl = document.createElement("template");
tpl.innerHTML=`
    <style>
        :host{
            display: block;
        }
        .imgs{
            overflow: hidden;
        }
        ::slotted(img){
            max-width: 100%;
        }
        .contros{
            margin-bottom: 1em;
        }
    </style>
    <slot name="title"></slot>
    <div class="controls">
        <span id="current">Foto 1 de 3</span>
        <button id="prev">Anterior</button>
        <button id="next">Próxima</button>
    </div>
    <slot id="imgs"></slot>

`

class ImgGalleryElement extends HTMLElement{
    constructor(){
        super();
        //CRIAR SHADOW DOM
        this.attachShadow( { mode: "open" });
        //ADICIONAR TEMPLATE NO SHADOW DOM
        this.shadowRoot.append(tpl.content.cloneNode(true));

        this.selectedIdx = 0;

        const imgsEl = this.shadowRoot.getElementById("imgs");
        const prevEl = this.shadowRoot.getElementById("prev");
        const nextEl = this.shadowRoot.getElementById("next");
        const currentEl = this.shadowRoot.getElementById("current");
        
        const updateUi = () => {
            const imgs = imgsEl.assignedNodes().filter(e => e.nodeName ==="IMG");
            currentEl.textContent = `Foto ${this.selectedIdx+1} de ${imgs.length} `;
            
            for (let i=0; i<imgs.length; i++){
                const img = imgs[i];
                img.style.display = this.selectedIdx === i ? "initial" : "none"; 
            }

            prevEl.disabled = this.selectedIdx ===0;
            nextEl.disabled = this.selectedIdx ===imgs.length - 1;
        }
        updateUi();



        prevEl.addEventListener("click", () => {
            this.selectedIdx--;
            updateUi();
        });
        nextEl.addEventListener("click", () => {
            this.selectedIdx++;
            updateUi();
        });

        imgsEl.addEventListener("slotchange", () => {
            const imgs = imgsEl.assignedNodes().filter(e => e.nodeName ==="IMG");
            const length = imgs.length;
            if(this.selectedIdx >= length){
                this.selectedIdx = length -1;
            }
        });
    }
}

//REGISTRANDO O ELEMENTOS
customElements.define("img-gallery", ImgGalleryElement);