 class MeuRelogioElement extends HTMLElement{
     constructor(){
         super();
         this.attachShadow({mode: "open"});
         this.spanE1 = document.createElement("span");
         this.spanE1.textContent= getHMS();
         this.shadowRoot.append(this.spanE1);
     }

     connectedCallback() {
        this.spanEl.textContent = getHMS();
        this.timer = setInterval(() => {
          this.spanEl.textContent = getHMS();
        }, 1000);
      }
      
     disconnectedCallback(){
         clearInterval(this.timer);
     }
 }

 function getHMS(){
    const dh = new Date();
    const h = formatNumber(dh.getHours());
    const m = formatNumber(dh.getMinutes());
    const s = formatNumber(dh.getSeconds());
    return `${h}:${m}:${s}`;
 }

 function formatNumber(n){
   return String(n).padStart(2, "0");  
 }

 customElements.define("meu-relogio", MeuRelogioElement);