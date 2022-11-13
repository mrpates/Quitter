function Start(){
    window.location="Main.html";
}


function problem(){
    window.location="problem.html";
}



function about(){
    window.location="about.html";
}


function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}