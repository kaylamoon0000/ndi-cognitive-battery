function getCurrentUser(){
 return localStorage.getItem("currentUser");
}

function loginUser(username){
 localStorage.setItem("currentUser", username);
}

function logoutUser(){
 localStorage.removeItem("currentUser");
 window.location.href="login.html";
}

function requireLogin(){

 const publicPages = ["login.html","signup.html"];

 const page = window.location.pathname.split("/").pop();

 if(!getCurrentUser() && !publicPages.includes(page)){
  window.location.href="login.html";
 }

}

function updateAuthUI(){

 const toggle = document.getElementById("authToggle");
 if(!toggle) return;

 const user = getCurrentUser();

 if(user){
  toggle.innerText = "Logout ("+user+")";
  toggle.onclick = logoutUser;
 }else{
  toggle.innerText = "Login";
  toggle.onclick = ()=>window.location.href="login.html";
 }

}

document.addEventListener("DOMContentLoaded",updateAuthUI);
