
if(localStorage.getItem("currentUser")==undefined){
    window.location.href = "./index.html";
}

let saveInfoBtn=document.getElementById('saveInfoBtn');
saveInfoBtn.addEventListener("click",function(){
    let users=JSON.parse(localStorage.getItem("usersData"));
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let fName=document.getElementById('fName').value.trim();
    let lName=document.getElementById('lName').value.trim();
    currentUser.fName = fName;
    currentUser.lName = lName;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    users[currentUser.id-1]=currentUser;
    localStorage.setItem("usersData", JSON.stringify(users));
});
let changePasswordBtn=document.getElementById('changePasswordBtn');
let logOutBtn=document.getElementById('logOutBtn');
logOutBtn.addEventListener('click',function(){
    localStorage.removeItem("currentUser");
            window.location.href="./index.html";
});
