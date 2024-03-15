// app.js

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer'); // For handling file uploads
const fs = require('fs'); // For interacting with the file system

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
    filePath: String, // Path to the uploaded video file
    // Add more fields as needed
});

// Create Video model
const Video = mongoose.model('Video', videoSchema);

// Multer setup for handling file uploads
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
            filePath: req.file.path, // Path to the uploaded video file
        });

        // Save the new video document to the database
        await newVideo.save();

        res.status(200).send('Video uploaded successfully!');
    } catch (err) {
        console.error('Failed to upload video:', err);
        res.status(500).send('Failed to upload video.');
    }
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
