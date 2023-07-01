if(localStorage.getItem("currentUser")==undefined){
    let loginButton=document.getElementById('loginButton');
    loginButton.addEventListener("click", loginUser);
    function loginUser(event){
        event.preventDefault();
        let users=JSON.parse(localStorage.getItem("usersData"));
        let emailValue=document.getElementById('email').value.trim();
        let passwordValue=document.getElementById('password').value.trim();
        for(let i=0;i<users.length;i++){
            if(users[i].email==emailValue && users[i].password==passwordValue){
                localStorage.setItem("currentUser",JSON.stringify(users[i]));
                window.location.href="./shop.html";
                break;
            }
        }
    }
}else{
    window.location.href="./shop.html";
}
