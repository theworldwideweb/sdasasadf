// signin.js
document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.getElementById("signInForm");

    signInForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Perform authentication (replace this with your authentication logic)
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Assume authentication is successful for demonstration purposes
        // You should replace this with your actual authentication logic
        if (username === "exampleuser" && password === "password") {
            // Redirect the user to the home page
            window.location.href = "/home";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
