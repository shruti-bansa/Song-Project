console.log("Welcome to my fav song ");


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let bestplay = document.getElementById('bestplay');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: " Sapno mein Inna pyara-by[i love you❤️]", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg"},
    {songName: "Laal Chunariya-[heart💕]", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Galtiyan-by[raj-parik(❁´◡`❁)]", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Different Haye Me kya karu[(●'◡'●)]", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg"},
    {songName: "Meri Mahiye-[chull mahiye(✿◡‿◡)", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
    {songName: "Tum jo Mile to-[Ishq(❁´◡`❁)]", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg"},
    {songName: "Tum kya mile-[😘]", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg"},
    {songName: "Ban gye ho Manjile-[love🫶]", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg"},
    {songName: "English song-by[love-(●'◡'●)]", filePath: "songs/9.mp3", coverPath: "covers/9.jpeg"},
   
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 
  
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        bestplay.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    bestplay.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    bestplay.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})