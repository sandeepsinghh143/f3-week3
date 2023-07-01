let currentUser=JSON.parse(localStorage.getItem("currentUser"));
let profile=document.getElementById('profile');
profile.innerHTML=" "+currentUser.fName+" "+currentUser.lName;