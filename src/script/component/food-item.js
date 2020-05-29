class FoodItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    set food(food) {
        this._food = food;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
       
    <style>
    .flex-parent{
        display: flex;
        height: auto;
        width: auto;
        flex-direction: row; 
        margin-bottom:50px;
    }
    
    .flex-child{
        background: yellow;
        color: black;
        border: 1px solid black;
        flex-basis: 50px;
        opacity:0.8;
        font-family: 'Fugaz One', cursive;
        border-radius:20px;
    }
    
    #satu{
        flex-basis: 50%;
    } 
    
    #empat{
        flex-basis: 50%;
    }

    .text1{
        margin-left:30px;
        text-decoration: underline;
    }

    .text2{
        margin-left:30px;
    }

    .fan-art-food  {
        object-fit: cover;
        object-position: left;
        height : 300px;
        width : 350px;
        margin-left:30px;
        margin-right:30px;
        border-radius:50%;
    }

    a{
        text-decoration:none;
    }

    @media screen and (max-width:720px){
        .flex-parent{
            display: flex;
            height: auto;
            width: auto;
            flex-direction: column; 
            margin-bottom:50px;
            border-radius:20px;
            margin-left:10px;
            margin-right:10px;
        }
        
        .flex-child{
            background: yellow;
            color: black;
            border: 1px solid black;
            flex-basis: 50px;
            opacity:0.8;
            font-family: 'Fugaz One', cursive;
            text-align:center;
        
        }

        #satu{
            flex-basis: 50%;
        } 
        
        #empat{
            flex-basis: 50%;
           
        }
    
        .text1{
            margin-left:30px;
            text-decoration: underline;
            text-align:center;
        }
    
        .text2{
            margin-left:30px;
            margin-right:10px;
            margin-left:10px;
        }
    
        .fan-art-food  {
            object-fit: cover;
            object-position: center;
            height : 240px;
            width : 250px;
            margin-left:15px;
            margin-right:15px;
            
        }

        a{
            text-decoration:none;
        }
    }

    @media screen and (max-width:360px){
        .flex-parent{
            display: flex;
            height: auto;
            width: auto;
            flex-direction: column; 
            margin-bottom:50px;
            border-radius:20px;
            margin-left:10px;
            margin-right:10px;
        }
        
        .flex-child{
            background: yellow;
            color: black;
            border: 1px solid black;
            flex-basis: 50px;
            opacity:0.8;
            font-family: 'Fugaz One', cursive;
            text-align:center;
        }

        #satu{
            /* order: 2; semakin tinggi angka maka berada disebelah kanan
            atau terakhir*/
            /* flex-grow: 1; pertumbuhan */
            /* flex-shrink: 1; penyusutan */
            flex-basis: 50%;
        } 
        
        #empat{
            flex-basis: 50%;
        }
    
        .text1{
            margin-left:30px;
            text-decoration: underline;
        }
    
        .text2{
            margin-left:30px;
            
        }
    
        .fan-art-food  {
            object-fit: cover;
            object-position: left;
            height : 150px;
            width : 180px;
            margin-left:10px;
            margin-right:10px;
        }

        a{
            text-decoration:none;
        }
    }

    @media screen and (max-width:260px){
        .flex-parent{
            display: flex;
            height: auto;
            width: auto;
            flex-direction: column; 
            margin-bottom:50px;
            border-radius:20px;
        }
        
        .flex-child{
            background: yellow;
            color: black;
            border: 1px solid black;
            flex-basis: 50px;
            opacity:0.8;
            font-family: 'Fugaz One', cursive;
            text-align:center;
            font-size:10px;
        }

        #satu{
            flex-basis: 50%;
        } 
        
        #empat{
            flex-basis: 50%;
        }
    
        .text1{
            margin-left:30px;
            text-decoration: underline;
        }
    
        .text2{
            margin-left:30px;
            
        }
    
        .fan-art-food  {
            object-fit: cover;
            object-position: center;
            height : 100px;
            width : 130px;
            margin-left:10px;
            margin-right:10px;
        }

        a{
            text-decoration:none;
        } 
    }
    
    </style>

    <div class="flex-parent">
        <div class="flex-child" id="satu">
        <div class="text1">
        <h2>${this._food.strMeal}</h2></div>
        <img class="fan-art-food" src="${this._food.strMealThumb}" alt="Fan Art">
        </div>

        <div class="flex-child" id="empat">
        <div class="text2">
        <p><b>From :</b> &nbsp${this._food.strArea}</p>
        <p><b>Ingredients:</b><p>
        <p># ${this._food.strIngredient1}</p>
        <p># ${this._food.strIngredient2}</p>
        <p># ${this._food.strIngredient3}</p>
        <p># ${this._food.strIngredient4}</p>
        <p># ${this._food.strIngredient5}</p>
        <p># etc..</p>
        
        For more information, please watch tutorial cooking on <a href="${this._food.strYoutube}">
        <span><font color=red>Youtube</font></span></a>
        </div>

        </div>
    </div>
    `;
    }
 }
  
 customElements.define("food-item", FoodItem);