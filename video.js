document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get("url");
    const title = urlParams.get("title");
    const category = urlParams.get("category");
    const duration = urlParams.get("duration");

    const mainVideo = document.getElementById("main-video");
    const videoTitle = document.getElementById("video-title");
    const videoCategory = document.getElementById("video-category");
    const videoDuration = document.getElementById("video-duration");

    if (url) {
        mainVideo.src = url;
        mainVideo.load();
        mainVideo.play();
    } else {
        videoTitle.textContent = "No video selected";
    }
    if (title) videoTitle.textContent = title;
    if (category) videoCategory.textContent = `Category: ${category}`;
    if (duration) videoDuration.textContent = `Duration: ${duration}`;
});
