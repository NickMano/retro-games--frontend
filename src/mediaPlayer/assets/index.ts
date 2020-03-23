import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video: HTMLElement = document.getElementById('principalVideo')
const playButton: HTMLElement  = document.getElementById('playButton')
const muteButton: HTMLElement = document.getElementById('muteButton')
const player: MediaPlayer = new MediaPlayer( {el: video, plugins: [

]})

playButton.onclick = () => {
    player.tooglePlay()
}

muteButton.onclick = () => {
    player.toogleMute()
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../../sw.js').catch(error => {
        console.log(error)
    })
}