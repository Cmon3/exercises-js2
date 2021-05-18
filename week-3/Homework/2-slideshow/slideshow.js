// Write your code here
const images = [
  "https://images.unsplash.com/photo-1509220368961-0bb503ffdec0?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", 
  "https://images.unsplash.com/photo-1617982370259-db633e0a061a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", 
  "https://images.unsplash.com/photo-1616686220475-d4efa649f7da?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",  
  "https://images.unsplash.com/photo-1614803029955-60684e98335e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
]

const imageContainer = document.querySelector("#imageContainer > img")
const backwardButton = document.getElementById("backwardButton")
const forwardButton = document.getElementById("forwardButton")
const autoplayButton = document.getElementById("autoPlayButton")

backwardButton.addEventListener("click", () => handleClick(-1))
forwardButton.addEventListener("click", () => handleClick(1))
autoPlayButton.addEventListener("click", () => handleAutoPlay())

let currentIndex = 0

function handleClick(index) {
  let nextIndex = currentIndex + index

  if (nextIndex === images.length) {
    currentIndex = 0
  } else if (nextIndex < 0) {
    currentIndex = images.length - 1
  } else {
    currentIndex = nextIndex
  }

  appendImage(images[currentIndex])
}

let isPlaying = false
let interval

function handleAutoPlay() {
  if (!isPlaying) {
    interval = setInterval(() => handleClick(1), 2000)
  } else {
    clearInterval(interval)
  }
  isPlaying = !isPlaying
}

function appendImage(src) {
  imageContainer.src = src
}

function init() {
  appendImage(images[0])
}

init()