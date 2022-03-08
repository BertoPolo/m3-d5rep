
fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "a91386478dmsh26d5ec919787d88p121f11jsnadc153cc2fea"
  }
})
.then(response => response.json())
.then(database => {
  console.log(database);
  let artistHeader = document.querySelector(".header-container h1")
  artistHeader.innerText = database.data[0].artist.name

  let artistPictureDiv = document.querySelector(".artist-title-container")
  artistPictureDiv.style.backgroundImage = `url(${database.data[0].artist.picture_big})`;

  let artistPick = document.querySelector(".artist-pick")
  artistPick.innerHTML = 
  `
  <div class="px-4 px-lg-0 pick-details d-flex">
  <img src=${database.data[0].album.cover} alt="artist-pick" width="80px" height="80px">
  <div class="d-flex flex-column">
  <div class="d-flex align-items-center">
  <img src=${database.data[0].artist.picture_small} alt="artist img" class="small-artist-img" width="22px" height="22px">
  <p>Posted By ${database.data[0].artist.name}</p>
  </div>
  <h4>${database.data[0].album.title}</h4>
  <p>Playlist</p>
  </div>
  `

  let popularSection = document.querySelector("#popular-content-container")
  let allSongs = document.querySelector("#all-songs")
  
  let songs = database.data 
 for (let i = 0; i < 5; i++) {
  let popularContentCard = document.createElement("div")
  popularContentCard.classList = "ps-4 ps-4 popular-content-card d-flex justify-content-between"
  popularContentCard.innerHTML = `<div class="d-flex align-items-center justify-content-between w-100">
                                    
  <div class="d-flex align-items-center">
      <div class="number">${i+1}</div>
      <img src=${songs[i].album.cover} alt="" width="50px">
      <div class="song">${songs[i].title_short}</div>
  </div>
  <div class="more-details d-flex align-items-center justify-content-between">
      <div class="listen d-none d-md-block">487,413,495</div>
      <div class="duration d-none d-lg-block">${countMin(songs[i].duration)}</div>
  </div>
  
</div>
<div class="more-details-icon d-flex align-items-center"><i class="bi bi-three-dots-vertical d-lg-none"></i></div>`;
  popularSection.appendChild(popularContentCard)
 }

 for (let i = 5; i < songs.length; i++) {
  let popularContentCard = document.createElement("div")
  popularContentCard.classList = "ps-4 ps-4 popular-content-card d-flex justify-content-between"
  popularContentCard.innerHTML = `<div class="d-flex align-items-center justify-content-between w-100">
                                    
  <div class="d-flex align-items-center">
      <div class="number">${i-5}</div>
      <img src=${songs[i].album.cover} alt="" width="50px">
      <div class="song">${songs[i].title_short}</div>
  </div>
  <div class="more-details d-flex align-items-center justify-content-between">
      <div class="listen d-none d-md-block">487,413,495</div>
      <div class="duration d-none d-lg-block">${countMin(songs[i].duration)}</div>
  </div>
  
</div>
<div class="more-details-icon d-flex align-items-center"><i class="bi bi-three-dots-vertical d-lg-none"></i></div>`;
  allSongs.appendChild(popularContentCard)
 }
  
  

})
.catch(err => {
  console.error(err)
});

function countMin(s) {
  let m = Math.floor(s/60); 
    s -= m*60;
    return m +":"+(s < 10 ? '0'+s : s)
}

function displayAlbums() {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "a91386478dmsh26d5ec919787d88p121f11jsnadc153cc2fea"
  }
})
.then(response => response.json())
.then(database => {

  let albums = database.data
  for (let album of albums) {
    let modal = document.querySelector("#exampleModal .modal-body")
    modal.innerHTML += `<div>${album.album.title}</div>`
  }



})
.catch(err => {
  console.error(err)
});

}
displayAlbums()

function showUnique() {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "a91386478dmsh26d5ec919787d88p121f11jsnadc153cc2fea"
  }
})
.then(response => response.json())
.then(database => {
  let allTitles = database.data.map(x => x.album.title)
  allTitles.sort()
  let uniqueTitles = [];
  let count = 0;
  let start = false;


  for (i = 0; i < allTitles.length; i++) {
    for (j = 0; j < uniqueTitles.length; j++) {
        if ( allTitles[i] == uniqueTitles[j] ) {
            start = true;
        }
    }
    count++;
    if (count === 1 && start === false) {
        uniqueTitles.push(allTitles[i]);
    }
    start = false;
    count = 0;
}
  console.log(uniqueTitles)

console.log(uniqueTitles.length)
      

})
.catch(err => {
  console.error(err)
});
}





function changeShuffle(){
  let shuffleIconDot = document.getElementById("shuffleDot");
  let shuffleIcon = document.querySelector(".bi-shuffle");

if(shuffleIconDot.classList == 'invisible') {
shuffleIconDot.classList = 'visible';
shuffleIcon.style.color = "#1DB954";
shuffleIcon.style.opacity = "1";
shuffleIconDot.style.color = "#1DB954";
} 
else {
  shuffleIcon.style.color =""
  shuffleIcon.style.opacity = "0.6"
  shuffleIconDot.classList = 'invisible';
  }
}

const audio = document.querySelector('audio'),
timeline = document.querySelector('.timeline');
audio.preload = "auto"

function changeRepeat(){
  let repeatIconDot = document.getElementById("repeatDot");
  let repeatIcon = document.querySelector(".bi-arrow-repeat");

if(repeatIconDot.classList == 'invisible') {
repeatIconDot.classList = 'visible';
repeatIcon.style.color = "#1DB954";
repeatIcon.style.opacity = "1";
repeatIconDot.style.color = "#1DB954";
audio.loop = true;
} 
else {
  repeatIcon.style.color = ""
  repeatIcon.style.opacity = "0.4"
  repeatIconDot.classList = 'invisible';
  }
}


function changeHeart(){
  let heart = document.querySelector("#heart");
  
  if (heart.classList == "bi bi-heart") {
  heart.classList.replace("bi-heart", "bi-heart-fill");
  heart.style.color = "#1DB954";
  heart.style.animation = "zoomIn 1s";
  
  } else {
  heart.classList.replace("bi-heart-fill", "bi-heart")
  heart.style.color = "#ffffff";
  heart.remove()
  let heartContainer = document.querySelector("#heart-container")
  let heartNew = document.createElement("i")
  heartNew.id = "heart"
  heartNew.classList = "bi bi-heart"
  heartContainer.appendChild(heartNew)
  heartNew.style.animation = "shake 0.3s linear";
}
}

function changeHeart0(){
  let heart = document.querySelector("#heart0");
  
  if (heart.classList == "bi bi-heart") {
  heart.classList.replace("bi-heart", "bi-heart-fill");
  heart.style.color = "#1DB954";
  heart.style.animation = "zoomIn 1s";
  
  } else {
  heart.classList.replace("bi-heart-fill", "bi-heart")
  heart.style.color = "#ffffff";
  heart.remove()
  let heartContainer = document.querySelector("#heart-container0")
  let heartNew = document.createElement("i")
  heartNew.id = "heart0"
  heartNew.classList = "bi bi-heart"
  heartContainer.appendChild(heartNew)
  heartNew.style.animation = "shake 0.3s linear";
}
}


function showPopUp(){
 let popUpPlayer = document.getElementById("pop-up-player")
 popUpPlayer.classList.toggle("pop-up-visibility")
}





function changeVolume() {
  let volume = document.getElementById("volume-slider")
  let icon = document.getElementById("volume-icon")
  if (volume.value == 0) {
  icon.classList = "bi bi-volume-mute";
  } else if (volume.value > 0 && volume.value < 60) {
    icon.classList = "bi bi-volume-down";
  } else {
    icon.classList = "bi bi-volume-up";
  }
}




function muteAudio () {
  audio.muted = !audio.muted;
  let volume = document.getElementById("volume-slider")
  let icon = document.getElementById("volume-icon")
  icon.classList = audio.muted ? "bi bi-volume-mute" : "bi bi-volume-down";
  volume.value = audio.muted ? "0" : "50"
  volume.style.backgroundSize = audio.muted ? "0" : "50%"
  
}

 
function pressPlay0() {
  let playButton = document.getElementById("media-player-play0")
  if (playButton.classList == "bi bi-play-circle-fill") {
  playButton.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
  audio.play()
  } else {
  playButton.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");
  audio.pause()
}
}

function pressPlay() {
  let playButton = document.getElementById("media-player-play")
  if (playButton.classList == "bi bi-play-circle-fill") {
  playButton.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
  audio.play()
  } else {
  playButton.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");
  audio.pause()
}
}

function audioEnded () {
    let playButton = document.getElementById("media-player-play")
    playButton.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");
}

audio.onended = audioEnded;

function secondsToHMS(s) {
    let m = Math.floor(s/60); 
    s -= m*60;
    return m +":"+(s < 10 ? '0'+s : s); 
}


function changeTimelinePosition () {
  const percentagePosition = (100*audio.currentTime) / audio.duration;
  timeline.style.backgroundSize = `${percentagePosition}% 100%`;
  timeline.value = percentagePosition;
  let range = document.querySelector("#rangevalue")
  range.innerHTML = secondsToHMS(Math.floor(audio.currentTime));
}

audio.ontimeupdate = changeTimelinePosition;


audio.onloadedmetadata = function() {
  let durationDiv = document.getElementById("duration");
  durationDiv.innerText = secondsToHMS(Math.floor(audio.duration));
};

let volumeSlider = document.getElementById("volume-slider")

function setVolume() {
  volumeSlider.addEventListener("change", function(){
  audio.volume = volumeSlider.value / 100;
  })

}

setVolume()
function changeSeek () {
  const time = (timeline.value * audio.duration) / 100;
  audio.currentTime = time;
}

timeline.addEventListener('change', changeSeek);




function fullHeartPop(){
let heart = document.querySelector("#heart");
let element = document.querySelector(".toasted")
let myToast = new bootstrap.Toast(element);
heart.addEventListener("click", function(){
        ;
});
let toast1 = document.getElementById("liveToast");
toast1.classList.toggle("toasted")
let toast2 = document.getElementById("liveToast2");
toast2.classList.toggle("toasted")

}

document.querySelector("#heart").addEventListener("click", function(){
let heart = document.querySelector("#heart");
let element = document.querySelector(".toasted")
let myToast = new bootstrap.Toast(element);
myToast.show()
let toast1 = document.getElementById("liveToast");
toast1.classList.toggle("toasted")
let toast2 = document.getElementById("liveToast2");
toast2.classList.toggle("toasted")
})

/*
document.addEventListener("DOMContentLoaded", function(){
    var btn = document.querySelector(".bi-heart");
    var element = document.getElementById("liveToast");

    btn.addEventListener("click", function(){        
        var myToast = bootstrap.Toast.getOrCreateInstance(element);
        // {_element: div#myToast.toast.fade.show, _config: {…}, _timeout: null, _hasMouseInteraction: false, _hasKeyboardInteraction: false}
    });
});

More about toasts:
https://getbootstrap.com/docs/5.1/components/toasts/#hide
https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-toasts.php
*/





/*
function changePop(){
  let heart = document.querySelector("#heart");
  if (heart.classList == "bi bi-heart") {
document.addEventListener("DOMContentLoaded", function(){
let element = document.getElementById("liveToast");
let myToast = new bootstrap.Toast(element);
heart.addEventListener("click", function(){
        myToast.show();
    });
  })
 } else {
document.addEventListener("DOMContentLoaded", function(){
let element2 = document.getElementById("liveToast2");
let myToast2 = new bootstrap.Toast(element2);
heart.addEventListener("click", function(){
        myToast2.show();
        });
})
}
}
/*

/*
There problem here is that I am trying to attach an event to DOM content that does not exist
var iconFill = document.querySelector(".bi-heart-fill")
let element2 = document.getElementById("liveToast2");
let myToast2 = new bootstrap.Toast(element2);
iconFill.addEventListener("click", function(){
        myToast2.show();
        });

})
*/






var exampleEl = document.getElementById('speaker')
var popover = new bootstrap.Popover(exampleEl)

document.addEventListener("DOMContentLoaded", function(){
    var element = document.getElementById("speaker");
    var popover = new bootstrap.Popover(element, {
        content: '<div class="text-center"><h4>Connect to a device <span><a href="https://developer.spotify.com/legal/third-party-licenses/#embedded-sdk-third-party-licenses" target="none"><i class="bi bi-question-circle"></i></a></span></h4><img src="/media/popup.png" id="img-popup" /><div>Play and control Spotify on all <br> your devices.</div><div>Start Spotify on another device <br> and it will magically appear here.</div><a href="https://developer.spotify.com/legal/third-party-licenses/#embedded-sdk-third-party-licenses" target="none"><img src="/media/button.png" id="img-button"/></a></div>',
        html: true
    });
});




const rangeInputs = document.querySelectorAll('input[type="range"]')
function handleInputChange2(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}
rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange2)
})


const musicTrack = document.querySelector('#music-track')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

audio.ontimeupdate = handleInputChange(musicTrack);


