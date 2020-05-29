class NavBarplus extends HTMLElement {
 
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
            .navbarplus{
                max-height: 20%;
                max-width: 100%;
                z-index: 1;
                top: 0;
                left: 0;
                background: -webkit-linear-gradient(0, #e52d27, #b31217);
                overflow-x: hidden;
                padding-top: 20px;
                border-bottom-left-radius: 30px;
                border-bottom-right-radius: 30px;
            }

            .marquee {
                color: white;
                white-space: nowrap;
                -webkit-animation: rightThenLeft 5s linear;
                
            }

        @media screen and (max-width:720px){
            .navbarplus{
                max-height: 20%;
                max-width: 100%;
                z-index: 1;
                top: 0;
                left: 0;
                background: -webkit-linear-gradient(0, #e52d27, #b31217);
                overflow-x: hidden;
                padding-top: 20px;
                border-bottom-left-radius: 30px;
                border-bottom-right-radius: 30px;
            
            }
            .marquee {
                font-size:11px;
                color: white;
                white-space: nowrap;
                -webkit-animation: rightThenLeft 8s linear;
                
            }
        }

        @media screen and (max-width:400px){
            .navbarplus{
                max-height: 20%;
                max-width: 100%;
                z-index: 1;
                top: 0;
                left: 0;
                background: -webkit-linear-gradient(0, #e52d27, #b31217);
                overflow-x: hidden;
                padding-top: 20px;
                border-bottom-left-radius: 30px;
                border-bottom-right-radius: 30px;
            
            }
            .marquee {
                font-size:7px;
                color: white;
                white-space: nowrap;
                -webkit-animation: rightThenLeft 8s linear;
                
            }
        }

    </style>
    <div class="navbarplus">
    <marquee behavior="alternate"><span class="marquee">Many recipes like beef, burger, fish, pasta, pie, sandwich, soup, and etc registered on this website</span></marquee>
    </div>    
    `;
    }
 }
  
 customElements.define("nav-barplus", NavBarplus);