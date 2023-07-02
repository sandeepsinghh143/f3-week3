if(localStorage.getItem("currentUser")!=undefined){
    window.location.href="./shop.html";
}
const addUserBtn=document.getElementById("add-user");

addUserBtn.addEventListener("click",addUser);
function addUser(event){
    event.preventDefault();
    const fName=document.getElementById("fName").value.trim();
    const lName=document.getElementById("lName").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim();
    const confirmPassword=document.getElementById("confirmPassword").value.trim();
    if(fName!="" && lName!="" && email!="" && password!="" && confirmPassword!=""){
        if(password != confirmPassword){
            alert("password mismatch!!!!!");
        }
        else if(localStorage.getItem("usersData") && localStorage.getItem("usersData").includes(email)){
            alert("email already in exists!!!!!   Please  login");
            window.location.href="./login.html";
        }
        else{
            let user={
                fName:fName,
                lName:lName,
                email:email,
                password:password
            };
            let users=JSON.parse(localStorage.getItem("usersData"))||[];
            users.push(user);
            localStorage.setItem("usersData", JSON.stringify(users));
            alert("signup Success !!!!!!");
            window.location.href="./login.html";
        }
    }else{
        alert("All fields are required");
    }
}

