if(localStorage.getItem("currentUser")!=undefined){
    window.location.href="./shop.html";
}
fetch(`https://fakestoreapi.com/products`)
.then(res=>res.json())
.then(json=>{
    let num=Math.floor(Math.random()*json.length);
document.getElementById("left-div").innerHTML=`<div class="product">
<div class="image" style="background-image: url('${json[num].image}');"></div>
<div class="title">${json[num].title}</div>
<div class="price">Price : $ ${json[num].price}</div>
<div class="rating">Rating : ${json[num].rating.rate}/5</div>
</div>`;
}
);

let loginPageButton = document.getElementById('login-page-btn');
let signupPageButton = document.getElementById('signup-page-btn');
loginPageButton.addEventListener('click',function () {
    document.location.href="./login.html";
});


signupPageButton.addEventListener('click',function (){
    document.location.href="./signup.html";
})