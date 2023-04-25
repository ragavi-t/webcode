let api_key = "AIzaSyCA3QqrKkuu4nSzNfzXs8T4r2aO6TG4Brk";
let video = "https://www.googleapis.com/youtube/v3/videos?";
let channel = "https://www.googleapis.com/youtube/v3/channels?";
let activites = "https://www.googleapis.com/youtube/v3/activities?"
let playList = "https://www.googleapis.com/youtube/v3/playlists?"

fetch(video + new URLSearchParams({
    key: api_key,
    part:'snippet',
    chart:'mostPopular',
    maxResults:40,
    regionCode:'IN'
})).then((res) => res.json())
.then(data => {
    // console.log(data);
    data.items.forEach(item => {
        getChannelIcon(item);
    })
})
.catch((err) => console.log(err))

let getChannelIcon = (video_data) => {
fetch(channel + new URLSearchParams({
    key:api_key,
    part:'snippet',
    id:video_data.snippet.channelId
}))
.then((res) => res.json())
.then(data => {
    // console.log(data);
    video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
    makeVideoCard(video_data);
})
}

const makeVideoCard = (data) => {
    var videoContainer = document.querySelector('.videoRow');
    videoContainer.innerHTML += ` <div class="box col-3 my-3">
    <div class="row d-flex align-items-center justify-content-center" onClick="location.href = 'https://www.youtube.com/watch?v=${data.id}' ">
      <img src="${data.snippet.thumbnails.high.url}" alt="">
  </div>
  <div class="details row">
      <div class="iconTitle col-lg-12 d-flex align-items-center py-2 px-4 justify-content-start">
          <img src="${data.channelThumbnail}" alt="">
          <p class="m-0 p-0 w-75">${data.snippet.title}</p>
          <i class="addIcon fa-solid fa-plus btn" onClick="addPlaylist()"></i>
      </div>
      <div class="channelTitle col p-0 mb-5">
          <p class="m-0 p-0 px-4">${data.snippet.channelTitle}</p>
      </div>
  </div>
    </div> `;
}

// Search Bar 

function valBut(){
    let inputVal = document.getElementById('inpVal');
    let searchLink = "https://www.youtube.com/results?search_query=";
    if(inputVal.value.length){
        location.href = searchLink + inputVal.value;
    }
}

// channel information

    fetch(channel + new URLSearchParams({
        key: api_key,
        part:'snippet',
      forUsername:'GoogleDevelopers'
    }))
    .then((res) => res.json())
    .then(data => {
        // console.log(data)
    })

    // AddPlaylist

    function addPlaylist(){
       let playList = document.querySelector('.playlistCard');
       playList.style.display = "block";
       let container = document.querySelector('.contain');
       container.style.display = "none";   
    }

    //  cancelCard

    function cancelAdd(){
        let playList = document.querySelector('.playlistCard');
        let container = document.querySelector('.contain');
        container.style.display = "flex";
        playList.style.display = "none";
}

    //  createPlaylist

function createPlaylist(){
    let form = document.querySelector('.formCreate');
    form.style.display = "block";
}

// submit playlist and append the data to left column of container

function submitDisplay(){
    let playList = document.querySelector('.playlistCard');
    let container = document.querySelector('.contain');
    container.style.display = "flex";
    playList.style.display = "none";
    let playMenu = document.querySelector('.menuPlay');
    playMenu.style.display = "block";
    var name = document.myForm.nameInput.value;
    buton.innerHTML=name;
}

// appended playlist fun

function playlistDisplay(){
    fetch(video + new URLSearchParams({
        key: api_key,
        part:'snippet',
        chart:'mostPopular',
        maxResults:20,
        regionCode:'IN'
    })).then((res) => res.json())
    .then(data => {
        console.log(data);
        var lisPlayRow = document.querySelector('.lisPlayRow');
        lisPlayRow.style.display = "block"
        let container = document.querySelector('.contain');
       container.style.display = "none"; 
    })
}
