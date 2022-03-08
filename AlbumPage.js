const mouseoverSong = function () {
  songNode = document.getElementsByClassName("song");
  numNode = document.getElementsByClassName("listNumber");
  heartNode = document.getElementsByClassName("heartSong");
  threeDotsNode = document.getElementsByClassName("threeDotsSong");
  for (let i = 0; i < songNode.length; i++) {
    songNode[i].addEventListener("mouseover", function (e) {
      songNode[i].classList.add("highLighting");
      numNode[i].innerText = " ";
      numNode[i].classList.add("listPlay");
      heartNode[i].classList.remove("hidden");
      threeDotsNode[i].classList.remove("hidden");
    });
    songNode[i].addEventListener("mouseleave", function (e) {
      songNode[i].classList.toggle("highLighting");
      numNode[i].innerText = i + 1;
      numNode[i].classList.toggle("listPlay");
      heartNode[i].classList.add("hidden");
      threeDotsNode[i].classList.add("hidden");
    });
  }
};
mouseoverSong();

// m3-d2rep
/* const bandsPlace = document.getElementById("bandsPlace");

const showAlbumsNode = document.getElementById("showAlbums");

const showAlbums = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const realData = data.data;
      realData.forEach((element) => {
        showAlbumsNode.innerHTML += `
<ul class="list-group">
<li class="list-group-item">${element.title}</li>
</ul>
`;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}; */

/* const showBand =()=>{

}
 */

/* const loadBands = (band) => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + band)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const realData = data.data;
      realData.forEach((element) => {
        bandsPlace.innerHTML += `
        <div class="card" style="width: 18rem;">
    <img src="${element.album.cover}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
        `;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}; */

/* window.onload = function () {
  loadBands();
}; */

//m3-d5rep
const fillTheSong = document.getElementById("fillTheSong")
const artistContainer = document.getElementById("artist-container")
 


const params=new URLSearchParams(window.location.search)
const id = params.get("id")


const fillTheAlbum =(album)=>{

  artistContainer.innerHTML = `
  <img class="img-fluid d-inline-flex" width="200px" src="${album.cover_medium}" alt="albumPhoto">
        <div class="ml-3">
          <h6 class="albumWord">${album.title}</h6>
          <h2 class="albumTitle"> </h2>
          <h6 >
              <img class="rounded-circle img-fluid bandLogo" src="https://www.aqueenofmagic.com/wp-content/uploads/2020/12/Queen-mid-70s-approved-photo-04-web-optimised-1000.jpg" alt="Band Logo">
              <span class="text-muted infoAlbum" > <span class="text-white">${album.artist.name} </span> yearAndDuration </span> 
          </h6>
      </div>
  `

  album.map((element)=>{
return(
    fillTheSong.innerHTML += `
    <span class="listNumber">1</span>
    <p class="pl-3 text-white">
  20th Century Fox Fanfare <br/>
  <span class="text-muted">Queen</span>
  </p>
    
    `)

  })
}




const albumFetch =()=>{

  fetch("https://striveschool-api.herokuapp.com/api/deezer/album/"+ id)
  .then((res)=>res.json())
  .then((album)=>{
      console.log(album)
    fillTheAlbum(album)

  })
}

window.onload =()=>{
  albumFetch()

}







