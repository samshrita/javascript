const musicContainer= document.querySelector('.music-container');
const playBtnr= document.querySelector('#play');
const prevBtn= document.querySelector('#prev');
const nextBtn= document.querySelector('#next');
const audio= document.querySelector('#audio');
const progress= document.querySelector('.progress');
const progressContainer= document.querySelector('.progress-container');
const titles= document.querySelector('#title');
const cover= document.querySelector('#cover');


//song titles
const songs = ['smellliketeenspirit' , 'wewillrockyou' , 'Photograph', 'nosurprises']


//keep track of songs
let songIndex= 3

//initially load song into DOM

loadSong(songs[songIndex])
    
    //update song details
    function loadSong(songs){
        titles.innerText = songs
        audio.src = `music/${songs}.mp3`
        
    }

function playSong(){
    musicContainer.classList.add('play')
    playBtnr.querySelector('i.fas').classList.remove('fa-play') 
    playBtnr.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
}   
function pauseSong(){
    musicContainer.classList.remove('play')
    playBtnr.querySelector('i.fas').classList.add('fa-play') 
    playBtnr.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause()

} 

function prevSong(){
    songIndex--
    if(songIndex <0){
        songIndex = songs.length -1
    }
loadSong(songs[songIndex])
playSong()

}
function nextSong(){
    songIndex ++
    if(songIndex > songs.length - 1){
        songIndex = 0
    }
loadSong(songs[songIndex])
playSong()

}
function updateProgress(e){
    const {duration , currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.getElementsByClassName.width = `${progressPercent}%`
    //console.log(e.srcElement)


}
function setProgress(e){
    const width = this.clientWidth
   // console.log(width)
    const clickX = e.offsetX
    //console.log(clickX)
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration

}

//event listeners

playBtnr.addEventListener('click' , () => {
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying){
        pauseSong()

    }else{
        playSong()
    }
})


//change songs events
prevBtn.addEventListener('click' , prevSong)
nextBtn.addEventListener('click' , nextSong)

audio.addEventListener('timeupdate' , updateProgress)


progressContainer.addEventListener('click' , setProgress) 
audio.addEventListener('ended' , nextSong)

