/* <a href="">
    <div
    class="card-container position-relative d-flex justify-content-center"
    >
    <img
        src="assets/playhoverbtn.png"
        class="playhover2"
        alt=""
    />
    <div>
        <img
        class="mt-3 img-card"
        src="assets/janis.png"
        alt="Card image cap"
        />
        <div
        class="d-flex flex-column align-items-start p-0 mt-3 ml-1 justify-content-start"
        >
        <div class="card-title line-clamp2">Janis Joplin</div>
        <p class="card-text mt-n2 line-clamp">Artist</p>
        </div>
    </div>
    </div>
</a> */



const searchFunc =()=>{
    const searchie = document.getElementById("searchie").value
    //careful with undefined ... if(404)=> fetch queen

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+ searchie)
    .then((resp)=>resp.json())
    .then((data)=>{
        console.log(data.data)
        const result = data.data

        toFill = document.getElementById("toFill")
        toFill.innerHTML=""

        result.map(element => {
            
            return(
            toFill.innerHTML+= `
            <a href="./AlbumPage.html?id=${element.album.id}">
            <div
            class="card-container position-relative d-flex justify-content-center "
            >
            <img
                src="assets/playhoverbtn.png"
                class="playhover2"
                alt=""
            />
            <div>
                <img
                class="mt-3 img-card"
                src="${element.album.cover}"
                alt="${element.album.title}"
                />
                <div
                class="d-flex flex-column align-items-start p-0 mt-3 ml-1 justify-content-start"
                >
                <div class="card-title line-clamp2">${element.artist.name}</div>
                <p class="card-text mt-n2 line-clamp">${element.album.title}</p>
                </div>
            </div>
            </div>
        </a
` )
            
        }).join("")
        
    })
    .catch((e)=>console.log(e))
}




/* const fetcher =(id=75621062)=>{
    fetch (" https://striveschool-api.herokuapp.com/api/deezer/album/" + id)
    .then((resp)=>resp.json())
    .then((data)=>{
        console.log(data)
        toFill = document.getElementById("toFill")
        //loop album-data and html here
    })
    .catch((e)=>console.log(e))
}



window.onload=()=>{
    fetcher()
} */