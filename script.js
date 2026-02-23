let userName = prompt("Welcome! What is your name?");

if (userName) { 

    document.getElementById("welcome-message").textContent = 

    "Hello, " + userName + "! Welcome to my portfolio!"; 

} else {

    document.getElementById("welcome-message").textContent = 
    
    "Welcome to my portfolio!"; }