document.addEventListener("DOMContentLoaded", () => {
    let but = document.getElementById("but");
    let video = document.getElementById("vid");
    let mediaDevices = navigator.mediaDevices;
    let videoStream = null; // Variable to store the video stream

    vid.muted = true;

    but.addEventListener("click", () => {
        if (videoStream) {
            videoStream.getTracks().forEach(track => track.stop());
            video.srcObject = null;
            videoStream = null;
        } else {
            mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    videoStream = stream;
                    video.srcObject = stream;
                    video.addEventListener("loadedmetadata", () => {
                        video.play();
                    });
                })
                .catch(alert);
        }
    });
});
