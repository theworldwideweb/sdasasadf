// Example Node.js with Express.js backend

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Dummy database (replace this with your actual database logic)
let videos = [];

// Endpoint for uploading a video
app.post('/upload', (req, res) => {
    const { url, caption } = req.body;
    const timestamp = new Date(); // Get current timestamp
    const video = { url, caption, timestamp };
    videos.push(video);
    res.status(201).send('Video uploaded successfully.');
});

// Endpoint for fetching all videos
app.get('/videos', (req, res) => {
    // Sort videos by upload timestamp (descending order)
    const sortedVideos = videos.sort((a, b) => b.timestamp - a.timestamp);
    res.json(sortedVideos);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
