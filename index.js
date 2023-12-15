const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");

let idx = 0; // Initialize idx to 0

updateNum();

function updateNum() {
    counterEl.innerText = idx + "%";
    barEl.style.width = idx + "%"; // Use style instead of computedStyleMap
    idx++;

    if (idx <= 100) {
        setTimeout(updateNum, 20);
    }
}
