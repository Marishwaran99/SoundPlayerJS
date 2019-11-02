const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector(".visual");
colors = [
  "lightcoral",
  "lightgreen",
  "lightsalmon",
  "lightseagreen",
  "lightpink",
  "lightblue"
];
pads.forEach((pad, i) => {
  pad.addEventListener("click", e => {
    sounds[i].currentTime = 0;
    sounds[i].play();
    createBubbles(i);
  });
});
const createBubbles = i => {
  const bubble = document.createElement("div");
  visual.appendChild(bubble);
  bubble.style.backgroundColor = colors[i];
  bubble.style.animation = "jump 1s ease";
  bubble.addEventListener("animationend", function() {
    visual.removeChild(this);
  });
};
