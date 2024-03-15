// signuplogin.js

// Function to handle user login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform authentication (replace this with your authentication logic)
    if (username === "vidious", "loganofc" && password === "vidious123!", "loganofc1") {
        // Redirect the user to the home page
        window.location.href = "/home";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Function to handle user signup
function signup() {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Perform signup logic (replace this with your signup logic)
    alert("Signup feature not implemented yet."); // Placeholder alert
}

// Function to show the signup form and hide the login form
function showSignup() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

// Function to show the login form and hide the signup form
function showLogin() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

// signuplogin.js

function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var newPasswordField = document.getElementById("newPassword");

    // Toggle the type attribute of the password field
    if (passwordField.type === "password") {
        passwordField.type = "text";
        newPasswordField.type = "text";
    } else {
        passwordField.type = "password";
        newPasswordField.type = "password";
    }
}
