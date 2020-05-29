class SearchBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM=this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            padding: 12px;
            border-radius: 0px;
            display: flex;
            top: 10px;
            background: -webkit-linear-gradient(0, #e52d27, #b31217);
            padding-left:20%;
            padding-right:20%;
        }
       
        .search-container > input {
            width: 75%;
            padding: 16px;
            border-radius: 20px;
            border: orange
            font-weight: bold;
            font-family: 'Sofia', cursive;
            font-size: 15px;
        }
       
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid black;
        }
       
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
       
        .search-container >  input::placeholder {
            color: black;
            font-weight: normal;
        }
       
        .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: yellow;
            color: black;
            border: 0;
            text-transform: uppercase;
            border-radius: 20px;
            font-family: 'Archivo Black', sans-serif;
        }

        .search-container > button:hover {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            background-color: yellow;
            opacity: 0.7;
            border-radius: 20px;
        }

        .masak{
            width:90%;
            height:90%;
           
        }
       
        @media screen and (max-width: 450px){
            .search-container {
                padding: 12px;
                border-radius: 0px;
                display: flex;
                top: 10px;
                background: -webkit-linear-gradient(0, #e52d27, #b31217);
                padding-left:20%;
                padding-right:20%;
            }
            .search-container > input {
                width: 75%;
                padding: 16px;
                border-radius: 20px;
                border: orange
                font-weight: bold;
                font-family: 'Sofia', cursive;
                font-size: 9.5px;
            }
           
            .search-container > button {
                text-align:center;
                font-size:8px;
                width: 23%;
                cursor: pointer;
                padding: 16px;
                background-color: yellow;
                color: black;
                border: 0;
                text-transform: uppercase;
                border-radius: 20px;
                font-family: 'Archivo Black', sans-serif;
            } 
        }
        
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search name recipes here" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Click here</button>
        </div>        
        `;
  
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
 }
 customElements.define("search-bar", SearchBar);