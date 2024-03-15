// app.js

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Vidious123', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Define video schema
const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    uploadDate: { type: Date, default: Date.now },
    // Add more fields as needed
});

// Create Video model
const Video = mongoose.model('Video', videoSchema);

// Example: Insert a new video document
const newVideo = new Video({
    title: 'Sample Video',
    description: 'This is a sample video',
});
newVideo.save()
    .then(video => console.log('Video saved:', video))
    .catch(err => console.error('Failed to save video:', err));
