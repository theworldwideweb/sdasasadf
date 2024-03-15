function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function login() {
    // Implement login functionality here
    alert('Logged in successfully!');
    document.getElementById('uploadForm').style.display = 'block';
}

function signup() {
    // Implement signup functionality here
    alert('Signed up successfully!');
    document.getElementById('uploadForm').style.display = 'block';
}

function uploadVideo() {
    const videoFile = document.getElementById('videoFile').files[0];
    const caption = document.getElementById('caption').value;
    const uniqueId = generateRandomString(20); // Generate unique ID
    const videoLink = `video.html?id=${uniqueId}`; // Construct video link
    alert(`Video uploaded successfully! Your video link is: ${videoLink}`);
    // Here you would handle uploading the video file to the server
}

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
