function getCurrentUser(){
 return localStorage.getItem("currentUser");
}

function requireLogin(){
 if(!getCurrentUser()){
  window.location.href="login.html";
 }
}

function logout(){
 localStorage.removeItem("currentUser");
 window.location.href="login.html";
}
