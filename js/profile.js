// profile.js

// Function to retrieve user information from local storage and display it on the profile page
function displayUserProfile() {
    // Retrieve user information from local storage
    const userJson = localStorage.getItem("vidiousUser");
    
    if (userJson) {
        // Parse the JSON string to get the user object
        const user = JSON.parse(userJson);

        // Display the username
        document.getElementById("username").textContent = user.username;
        
        // You can display other user information here as well, such as profile picture, etc.
    } else {
        console.log("User information not found in local storage.");
    }
}

// Call the displayUserProfile function when the profile page loads
window.onload = function() {
    displayUserProfile();
};
