/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.fullScreen');

/* Build out functions */
function togglePlay(){
    let method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleSkip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click',togglePlay);

skipButtons.forEach(btn => btn.addEventListener('click', handleSkip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

fullScreen.addEventListener('click',() => {
    video.requestFullscreen();
});

progress.addEventListener('click', scrub);


//bonus

document.addEventListener('keydown', (e) => {
    if(e.code === "Space")
        togglePlay();
});