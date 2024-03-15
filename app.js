// app.js

// Require necessary modules
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

// Create Express application
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Vidious123', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Define video schema
const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    filePath: String,
});

// Create Video model
const Video = mongoose.model('Video', videoSchema);

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// Route for uploading a video
app.post('/upload', upload.single('video'), async (req, res) => {
    try {
        // Extract metadata from the request (e.g., title, description)
        const { title, description } = req.body;
        
        // Create a new video document
        const newVideo = new Video({
            title: title,
            description: description,
            filePath: req.file.path,
        });

        // Save the new video document to the database
        const savedVideo = await newVideo.save();

        // Generate the link for the uploaded video
        const videoLink = `${req.protocol}://${req.get('host')}/videos/${savedVideo._id}`;

        // Send the video link in the response
        res.status(200).json({ videoLink: videoLink });
    } catch (err) {
        console.error('Failed to upload video:', err);
        res.status(500).send('Failed to upload video.');
    }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
