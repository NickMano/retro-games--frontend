import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

const video: HTMLElement | null = document.getElementById('principalVideo')
const playButton: HTMLElement | null  = document.getElementById('playButton')
const muteButton: HTMLElement | null = document.getElementById('muteButton')
const player = new MediaPlayer( {el: video, plugins: [

]})

if (playButton) {
    playButton.onclick = () => {
        player.tooglePlay()
    }
}

if (muteButton) {
    muteButton.onclick = () => {
        player.toogleMute()
    }
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../sw.js').catch(error => {
        console.log(error)
    })
}