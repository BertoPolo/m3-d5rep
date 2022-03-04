const mouseoverSong = function () {
  songNode = document.getElementsByClassName('song')
  numNode = document.getElementsByClassName('listNumber')
  heartNode = document.getElementsByClassName('heartSong')
  threeDotsNode = document.getElementsByClassName('threeDotsSong')
  for (let i = 0; i < songNode.length; i++) {
    songNode[i].addEventListener('mouseover', function (e) {
      songNode[i].classList.add('highLighting')
      numNode[i].innerText = ' '
      numNode[i].classList.add('listPlay')
      heartNode[i].classList.remove('hidden')
      threeDotsNode[i].classList.remove('hidden')
    })
    songNode[i].addEventListener('mouseleave', function (e) {
      songNode[i].classList.toggle('highLighting')
      numNode[i].innerText = i + 1
      numNode[i].classList.toggle('listPlay')
      heartNode[i].classList.add('hidden')
      threeDotsNode[i].classList.add('hidden')
    })
  }
}
mouseoverSong()

const expander = function(){
  const seeMoreNode = document.querySelector(".seeMore")
  const hiddenSongNode = document.getElementsByClassName("hiddenSong")

  seeMoreNode.addEventListener("click",function(e){
    for(let i =0;i<hiddenSongNode.length;i++){
      hiddenSongNode[i].classList.remove("hiddenSong")
    }

  })
}
expander()

// could be greater if it creates 5 songs instead unhide 5