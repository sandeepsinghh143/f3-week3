
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
    for(let i=0;i<users.length;i++){
        if(users[i].email === currentUser.email){
            users[i]=currentUser;
        }
    }
    localStorage.setItem("usersData", JSON.stringify(users));
});

let changePasswordBtn=document.getElementById('changePasswordBtn');
changePasswordBtn.addEventListener("click",function(){
    let users=JSON.parse(localStorage.getItem("usersData"));
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let oldPassword=document.getElementById("oldPass").value.trim();
    let newPassword=document.getElementById("newPass").value.trim();
    let confNewPassword=document.getElementById("confNewPass").value.trim();
    if(oldPassword==currentUser.password){
        if(newPassword==confNewPassword){
            currentUser.password=newPassword;
        }
    }
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
    for(let i=0;i<users.length;i++){
        if(users[i].email === currentUser.email){
            users[i]=currentUser;
        }
    }
    localStorage.setItem("usersData",JSON.stringify(users));
});

let logOutBtn=document.getElementById('logOutBtn');
logOutBtn.addEventListener('click',function(){
    localStorage.removeItem("currentUser");
            window.location.href="./index.html";
});
