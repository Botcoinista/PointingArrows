// Get the video element and the fullscreen button
const video = document.querySelector('iframe');
const fullscreenButton = document.getElementById('fullscreenButton');

// Add click event listener to the fullscreen button
fullscreenButton.addEventListener('click', toggleFullScreen);

// Function to toggle fullscreen mode
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // If fullscreen mode is not active, request fullscreen
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    } else {
        // If fullscreen mode is active, exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
}
