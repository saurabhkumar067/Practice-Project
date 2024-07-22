let songsList = [
  {
    name: "Chasing Cars",
    artist: "Rahul",
    cover: "./img-song/image.jfif",
    song: "/musicPlayer/img-song/Maharani.mp3",
  },
  {
    name: "Krishna",
    artist: "God",
    cover: "",
    song: "/musicPlayer/img-song/Krishna Ki Chetavani (Rashmirathi).mp3",
  },
  {
    name: "Hanuman",
    artist: "Hanuman",
    cover: "./img-song/hanuman.jfif",
    song: "/musicPlayer/img-song/keejo kesari  Ke Lal.mp3",
  },
];

let audio = new Audio();
let currentSong = 0;
let playing = false;

let img = document.querySelector(".flexImg img");
let title = document.querySelector(".title");
let songWriter = document.querySelector(".songWriter");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let slideBar = document.getElementById('slideBar')
let circle = document.querySelector('.circle')
let currTime = document.getElementById('curr')
let total = document.getElementById('total')

function insideImg() {
  let { name, artist, cover, song } = songsList[currentSong];
  img.src = cover;
  title.innerHTML = name;
  songWriter.innerHTML = artist;
  audio.src = song;
}
insideImg();

play.addEventListener("click", playSong);
prev.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);
audio.addEventListener('timeupdate', circleValue)
slideBar.addEventListener('click', slideBarValue)

function playSong() {
  if (playing) {
    audio.pause();
    play.src = "/musicPlayer/img-song/play.svg";
  } else {
    audio.play();
    play.src = "/musicPlayer/img-song/pause.svg";
  }
  playing = !playing;
}

function prevSong() {
  if (currentSong > 0) {
    currentSong -= 1;
    insideImg();
    audio.play();
    playing = true;
    play.src = "/musicPlayer/img-song/pause.svg";
  } else {
    alert("No previous song!");
  }
}
function nextSong() {
  if (currentSong < songsList.length - 1) {
    currentSong += 1;
    insideImg();
    audio.play();
    playing = true;
    play.src = "/Spotify/pause.svg";
  } else {
    alert("No next song!");
  }
}

function circleValue(){
  if(audio.duration){
  let value = Math.floor((audio.currentTime / audio.duration)*100);
  circle.style.left = `${value}%`
  currTime.innerHTML = formatTime(audio.currentTime);
  total.innerHTML = formatTime(audio.duration)
  }
}

function slideBarValue(e){
  let prect = Math.floor((e.offsetX / this.offsetWidth)*100)
  audio.currentTime = (audio.duration * prect) /100;
  circle.style.left = `${prect}%`
}
function formatTime(seconds){
  let min = Math.floor(seconds / 60);
  let secs = Math.floor(seconds % 60);
  return `0${min}:${secs<10?'0':''}${secs}`
}