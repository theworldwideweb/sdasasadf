// profile.js
document.addEventListener("DOMContentLoaded", function() {
    // Assume you have a variable 'username' containing the user's username
    const username = "ExampleUsername"; // Replace this with the actual username

    // Set the page title to the username
    document.title = username + "'s Profile";

    // Set the username in the header
    const usernameElement = document.getElementById("username");
    usernameElement.textContent = username;
});
