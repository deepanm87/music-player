const image = document.querySelector('img')
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const music = document.querySelector('audio')
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

const songs = [
    {
        name: 'song-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jethro',
        album: 'album-1'
    },
    {
        name: 'song-2',
        displayName: 'Seven Nation Army',
        artist: 'White Lotus',
        album: 'album-2'
    }, 
    {
        name: 'song-3',
        displayName: 'Black Mass',
        artist: 'The Rookie',
        album: 'album-3'
    },
    {
        name: 'song-4',
        displayName: 'Atom Peace',
        artist: 'Radiohead',
        album: 'album-4'
    }
]

let isPlaying = false

function playSong() {
    isPlaying = true
    playBtn.classList.replace('fa-play', 'fa-pause')
    playBtn.setAttribute('title', 'Pause')
    music.play()
}

function pauseSong() {
    isPlaying = false
    playBtn.classList.replace('fa-pause', 'fa-play')
    playBtn.setAttribute('title', 'Play')
    music.pause()
}

playBtn.addEventListener('click', () => {
    (isPlaying ? pauseSong() : playSong())
})

function loadSong(song) {
    title.textContent = `${song.displayName}`
    artist.textContent = song.artist
    music.src = `music/${song.name}.mp3`
    image.src = `img/${song.album}.jpg`
}

let songIndex = 0
function prevSong() {
    songIndex--
    if(songIndex < 0) {
        songIndex = songs.length - 1
    }
    loadSong(songs[songIndex])
    playSong()
}
function nextSong() {
    songIndex++
    if(songIndex > songs.length - 1) {
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
}

loadSong(songs[songIndex])

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)