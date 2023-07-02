
if(localStorage.getItem("currentUser")!=undefined){
    window.location.href="./shop.html";
}else{
    let loginButton=document.getElementById('loginButton');
    loginButton.addEventListener("click", loginUser);
    function loginUser(event){
        event.preventDefault();
            let users=JSON.parse(localStorage.getItem("usersData"));
            let emailValue=document.getElementById('email').value.trim();
            let passwordValue=document.getElementById('password').value.trim();
            if(emailValue && passwordValue){
                if(users){
                    let user=(users)=>{
                        for(let i=0;i<users.length;i++){
                            if(users[i].email==emailValue){
                                console.log(users[i]);
                                return users[i];
                                
                            }
                        }
                    };
                    let result=user(users);
                    if(result==undefined){
                        alert("email does not exist");
                    }else if(result.password===passwordValue){
                        localStorage.setItem("currentUser",JSON.stringify(result));
                        window.location.href="./shop.html";
                    }
                    else{ 
                        alert("Password is incorrect");
                    }
                }
            }else{
                alert("All fields are required");
            }
    }
}

