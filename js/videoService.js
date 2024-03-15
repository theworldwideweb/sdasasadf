const express = require('express');
const multer = require('multer'); // For handling file uploads
const path = require('path');

const app = express();
const PORT = 3000;

// Set up storage for uploaded videos
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

// Initialize multer upload
const upload = multer({ storage: storage });

// Dummy database (replace this with your actual database logic)
let videos = [];

// Endpoint for uploading a video
app.post('/upload', upload.single('video'), (req, res) => {
    const { caption } = req.body;
    const videoID = generateRandomID(); // Generate unique video ID
    const videoPath = req.file.path; // Path to uploaded video file
    const video = { id: videoID, path: videoPath, caption: caption };
    videos.push(video);
    res.status(201).send('Video uploaded successfully.');
});

// Endpoint for serving video files
app.get('/videos/:videoID', (req, res) => {
    const videoID = req.params.videoID;
    const video = videos.find(v => v.id === videoID);
    if (!video) {
        return res.status(404).send('Video not found.');
    }
    res.sendFile(path.join(__dirname, video.path));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Helper function to generate random video ID (for demonstration purposes)
function generateRandomID() {
    return Math.random().toString(36).substring(2, 10);
}
