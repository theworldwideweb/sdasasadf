// profile.js
document.addEventListener("DOMContentLoaded", function() {
    // Get username from local storage or other source
    const username = localStorage.getItem("username"); // Example: You might store the username during signup/login

    // Set username
    const usernameElement = document.getElementById("username");
    usernameElement.textContent = username;

    // Form submission handler for profile picture upload
    const profilePicForm = document.getElementById("profilePicForm");
    profilePicForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const profilePicInput = document.getElementById("profilePicInput");
        const file = profilePicInput.files[0];

        if (file) {
            const formData = new FormData();
            formData.append("profilePic", file);

            // Send profile picture to the server using AJAX or Fetch API
            // Handle response from server as needed
            // Example:
            // fetch("/api/profile/uploadProfilePic", {
            //     method: "POST",
            //     body: formData
            // })
            // .then(response => {
            //     // Handle response
            // })
            // .catch(error => {
            //     console.error("Error uploading profile picture:", error);
            // });
        } else {
            // Handle case when no file is selected
            console.error("No file selected.");
        }
    });
});
