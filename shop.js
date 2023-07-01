let currentUser=JSON.parse(localStorage.getItem('currentUser'));
let profile = document.getElementById('profile');
profile.innerText=" "+currentUser.fName+" "+currentUser.lName;

let range=document.getElementById("range");
let rangeValue=document.getElementById("range-value");
range.addEventListener("input",function(){
    rangeValue.innerText=range.value;
});
let cart=[];
const colors=['RED','BLUE','GREEN','ORANGE','BLACK','VIOLET'];
const sizes=['S','M','L','XL'];

const menSection=document.getElementById("men-section");
const womenSection=document.getElementById("women-section");
const jewellerySection=document.getElementById("jewellery-section");
const electronicSection=document.getElementById("electronic-section");
fetch(`https://fakestoreapi.com/products`)
.then(res=>res.json())
.then(data=>{
    let json=[...data];
    if(localStorage.getItem("productsData") === null){
        localStorage.setItem("productsData", JSON.stringify(data));
    }else{
        json=JSON.parse(localStorage.getItem("productsData"));
    }
    json.forEach(element => {
        let color=colors[Math.floor(Math.random()*colors.length)];
        let size=sizes[Math.floor(Math.random()*sizes.length)];
        if(element.category=="men's clothing"){
            let div=document.createElement("div");
            div.className="product";
            div.innerHTML=`<div class="image" style="background-image: url('${element.image}');"></div>
            <div class="title">${element.title.slice(0,50)}</div>
            <div class="price">Price : $ ${element.price}</div>
            <div class="color-size"><div style=color:${color.toLowerCase()}>${color}</div><div>${size}</div></div>
            <div class="rating">Rating : ${element.rating.rate}/5</div>
            <div class="text-center"><button class="cartBtn" id="${element.id}">Add to Cart</button></div>`;
            menSection.append(div);
        }
        else if(element.category =="women's clothing"){
            let div=document.createElement("div");
            div.className="product";
            div.innerHTML=`<div class="image" style="background-image: url('${element.image}');"></div>
            <div class="title">${element.title.slice(0,50)}</div>
            <div class="price">Price : $ ${element.price}</div>
            <div class="color-size"><div style=color:${color.toLowerCase()}>${color}</div><div>${size}</div></div>
            <div class="rating">Rating : ${element.rating.rate}/5</div>
            <div class="text-center"><button class="cartBtn" id="${element.id}">Add to Cart</button></div>`;
            womenSection.append(div);
        }
        else if (element.category == "electronics"){
            let div=document.createElement("div");
            div.className="product";
            div.innerHTML=`<div class="image" style="background-image: url('${element.image}');"></div>
            <div class="title">${element.title.slice(0,50)}</div>
            <div class="price">Price : $ ${element.price}</div>
            <div class="color-size"><div style=color:${color.toLowerCase()}>${color}</div><div>${size}</div></div>
            <div class="rating">Rating : ${element.rating.rate}/5</div>
            <div class="text-center"><button class="cartBtn" id="${element.id}">Add to Cart</button></div>`;
            electronicSection.append(div);
        }else{
            let div=document.createElement("div");
            div.className="product";
            div.innerHTML=`<div class="image" style="background-image: url('${element.image}');"></div>
            <div class="title">${element.title.slice(0,50)}</div>
            <div class="price">Price : $ ${element.price}</div>
            <div class="color-size"><div style=color:${color.toLowerCase()}>${color}</div><div>${size}</div></div>
            <div class="rating">Rating : ${element.rating.rate}/5</div>
            <div class="text-center"><button class="cartBtn" id="${element.id}">Add to Cart</button></div>`;
            jewellerySection.append(div);
        }

    });
    const addToCart = document.getElementsByClassName('cartBtn');
for(let i=0; i<addToCart.length; i++){
    addToCart[i].addEventListener('click',function(event){
        let productsData=JSON.parse(localStorage.getItem("productsData"));
        cart.push(productsData[addToCart[i].id-1]);
        localStorage.setItem("cartData", JSON.stringify(cart));
        event.target.className="removeButton";
        event.target.innerText="Added to Cart";
    });
}
});
 let searchBtn=document.getElementsByClassName("search-btn");
    for(let i=0; i<searchBtn.length; i++){
        searchBtn[i].addEventListener("click",function(){
            for(let j=0; j<searchBtn.length;j++){
                searchBtn[j].classList.remove("black");
            }
            searchBtn[i].classList.add("black");
        })
    }