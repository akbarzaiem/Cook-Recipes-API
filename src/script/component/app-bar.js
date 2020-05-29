class AppBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background: -webkit-linear-gradient(0, #e52d27, #b31217);
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
                padding-top: 16px;
                text-align:center;
                font-family: 'Sofia', cursive;
                font-size: 35px;
            }
            h1{
                text-align:center;
                font-family: 'Sofia', cursive;
                font-size: 17px;  
            }
        </style>
        <h2>Ready For Eat</h2>
        <h1>You can cook by yourself</h1>`;
    }
 }
  
 customElements.define("app-bar", AppBar);