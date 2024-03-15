// home.js
document.addEventListener("DOMContentLoaded", function() {
    // Fetch videos from the server
    fetchVideos()
        .then(videos => {
            // Sort videos by view count (descending order)
            videos.sort((a, b) => b.views - a.views);

            // Display videos
            const videoListElement = document.getElementById('videoList');
            videos.forEach(video => {
                const videoElement = createVideoElement(video);
                videoListElement.appendChild(videoElement);
            });
        })
        .catch(error => {
            console.error('Error fetching videos:', error);
        });
});

// Function to fetch videos from the server
function fetchVideos() {
    // This is a placeholder for your actual fetch logic to the server
    // You would typically make an AJAX request or use Fetch API to get the list of videos from the server
    // The server would handle fetching the videos along with their view counts
    return new Promise((resolve, reject) => {
        // Simulating asynchronous fetch process
        setTimeout(() => {
            // Example list of videos with view counts (replace with actual data from server)
            const videos = [
                { id: 1, url: 'video1.mp4', caption: 'Caption 1', views: 100 },
                { id: 2, url: 'video2.mp4', caption: 'Caption 2', views: 200 },
                { id: 3, url: 'video3.mp4', caption: 'Caption 3', views: 150 }
            ];
            resolve(videos);
        }, 1000);
    });
}

// Function to create video element
function createVideoElement(video) {
    const videoElement = document.createElement('div');
    videoElement.classList.add('video');

    const videoPlayer = document.createElement('video');
    videoPlayer.src = video.url;
    videoPlayer.controls = true;
    videoPlayer.classList.add('video-player');
    videoElement.appendChild(videoPlayer);

    const caption = document.createElement('p');
    caption.textContent = video.caption;
    caption.classList.add('caption');
    videoElement.appendChild(caption);

    return videoElement;
}
