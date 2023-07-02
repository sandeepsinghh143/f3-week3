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
function generateBill(cart){
  let bill=0;
  for(let i=0; i<cart.length; i++){
    bill+=cart[i].price
  }
  return bill*82.10;
}

let heading3=document.getElementById('heading3');
let total;
if(cart.length > 0){
    heading3.style.display="block";
    let table=document.createElement("table");
    total=0;
    cart.forEach(element => {
        let tr=document.createElement("tr");
        tr.innerHTML=`<td>${element.id}.</td><td>${element.title.slice(0,10)}</td><td>$${element.price}</td>`;
        table.append(tr);
        cartCheckoutList.append(table);
        total+=element.price;
    });
    let tr2=document.createElement("tr");
    tr2.className="total";
    tr2.innerHTML=`<td>Total</td><td>$ ${total.toFixed(2)}</td><td>Rs. ${(total*82.10).toFixed(2)}</td>`;
    table.append(tr2);
    let button=document.createElement('button');
    button.id="checkoutBtn";
    button.innerText="Proceed to Checkout";
    cartCheckoutList.append(button);
}

let amount=parseInt(generateBill(cart));



let checkoutBtn=document.getElementById("checkoutBtn");
checkoutBtn.addEventListener("click", function (e) {
  e.preventDefault();
    var options = {
        key: "rzp_test_xV39ZNbgU1Du4V", // Enter the Key ID generated from the Dashboard
        amount: amount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "MeShop. Checkout",
        description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        theme: {
          color: "#122620",
        },
        image: "https://cdn-icons-png.flaticon.com/128/891/891419.png",
        handler: function () {
          location.href = "./shop.html";
        },
        options: {
          checkout: {
            method: {
              netbanking: 0,
              card: 0,
              upi: 1,
              wallet: 0,
            },
          },
        },
      };
      var rzp1 = new Razorpay(options);
      rzp1.open();
  });
