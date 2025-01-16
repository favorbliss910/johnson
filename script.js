const progressRing = document.querySelector('.progress-ring-bar');
const progressText = document.querySelector('.progress-text');

const radius = progressRing.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

progressRing.style.strokeDasharray = circumference;
progressRing.style.strokeDashoffset = circumference;

// Function to update the progress bar
function setProgress(percentage) {
    const offset = circumference - (percentage / 100) * circumference;
    progressRing.style.strokeDashoffset = offset;
    progressText.textContent = `${percentage}%`;
}

// Set progress to 70%
setProgress(89);