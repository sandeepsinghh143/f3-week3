let currentUser=JSON.parse(localStorage.getItem("currentUser"));
let profile=document.getElementById('profile');
profile.innerHTML=" "+currentUser.fName+" "+currentUser.lName;
const colors=['RED','BLUE','GREEN','ORANGE','BLACK','VIOLET'];
const sizes=['S','M','L','XL'];
let cart=JSON.parse(localStorage.getItem("cartData"));
let carItems=document.getElementById('cart-items');
let cartCheckoutList=document.getElementById('cart-checkout-list');
cart.forEach(element => {
            let color=colors[Math.floor(Math.random()*colors.length)];
            let size=sizes[Math.floor(Math.random()*sizes.length)];
            let div=document.createElement("div");
            div.className="product";
            div.innerHTML=`<div class="image" style="background-image: url('${element.image}');"></div>
            <div class="title">${element.title.slice(0,50)}</div>
            <div class="price">Price : $ ${element.price}</div>
            <div class="color-size"><div style=color:${color.toLowerCase()}>${color}</div><div>${size}</div></div>
            <div class="rating">Rating : ${element.rating.rate}/5</div>
            <div class="text-center"><button class="removeItem" id="${element.id}">Remove from Cart</button></div>`;
            carItems.append(div);
});


if(cart.length > 0){
    let table=document.createElement("table");
    cart.forEach(element => {
        let tr=document.createElement("tr");
        tr.innerHTML=`<td>${element.id}.</td><td>${element.title.slice(0,10)}</td><td>$${element.price}</td>`;
        table.append(tr);
        cartCheckoutList.append(table);
    })
    let tr2=document.createElement('tr');
    tr.innerHTML=`<td>Total</td><td></td><td></td>`;
    table.append(tr2);
}