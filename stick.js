var animate = anime({
  targets: "#figure",
  translateX: 250,
  easing: "easeInOutSine",
  rotate: "1turn",
  autoplay: false,
});

document.querySelector("button").onclick = animate.play;
