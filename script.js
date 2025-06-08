// Sample video data (you can replace with your actual video data)
const videoData = [
    {
        "title": "Nice pussy girl masturbating",
        "thumbnail": "https://files.catbox.moe/k5fijm.png",
        "url": "https://files.catbox.moe/ns5ld9.mp4",
        "category": "indian",
        "duration": "2:30"
    },
    {
        "title": "Hot couple having fun",
        "thumbnail": "https://example.com/thumbnail2.jpg",
        "url": "https://example.com/video2.mp4",
        "category": "couple",
        "duration": "5:45"
    },
    {
        "title": "Amateur solo performance",
        "thumbnail": "https://example.com/thumbnail3.jpg",
        "url": "https://example.com/video3.mp4",
        "category": "amateur",
        "duration": "3:15"
    },
    {
        "title": "Professional adult film",
        "thumbnail": "https://example.com/thumbnail4.jpg",
        "url": "https://example.com/video4.mp4",
        "category": "professional",
        "duration": "12:20"
    },
    {
        "title": "Outdoor adventure",
        "thumbnail": "https://example.com/thumbnail5.jpg",
        "url": "https://example.com/video5.mp4",
        "category": "outdoor",
        "duration": "7:30"
    },
    {
        "title": "Romantic evening",
        "thumbnail": "https://example.com/thumbnail6.jpg",
        "url": "https://example.com/video6.mp4",
        "category": "romantic",
        "duration": "8:45"
    }
];

// DOM elements
const mainVideo = document.getElementById('main-video');
const videoTitle = document.getElementById('video-title');
const videoCategory = document.getElementById('video-category');
const videoDuration = document.getElementById('video-duration');
const suggestionsContainer = document.getElementById('suggestions-container');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');

// Initialize the page
function init() {
    loadSuggestions(videoData);
    
    // Play first video by default
    if (videoData.length > 0) {
        playVideo(videoData[0]);
    }
}

// Load suggestions
function loadSuggestions(videos) {
    suggestionsContainer.innerHTML = '';
    
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
            <div class="video-card-info">
                <h4>${video.title}</h4>
                <p>${video.category} • ${video.duration}</p>
            </div>
        `;
        
        videoCard.addEventListener('click', () => playVideo(video));
        suggestionsContainer.appendChild(videoCard);
    });
}

// Play selected video
function playVideo(video) {
    mainVideo.src = video.url;
    videoTitle.textContent = video.title;
    videoCategory.textContent = `Category: ${video.category}`;
    videoDuration.textContent = `Duration: ${video.duration}`;
    mainVideo.load();
    mainVideo.play();
}

// Search functionality
function searchVideos() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm.trim() === '') {
        loadSuggestions(videoData);
        return;
    }
    
    const filteredVideos = videoData.filter(video => 
        video.title.toLowerCase().includes(searchTerm) || 
        video.category.toLowerCase().includes(searchTerm)
    );
    
    loadSuggestions(filteredVideos);
}

// Event listeners
searchBtn.addEventListener('click', searchVideos);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchVideos();
    }
});

// Initialize the page when loaded
document.addEventListener('DOMContentLoaded', init);

