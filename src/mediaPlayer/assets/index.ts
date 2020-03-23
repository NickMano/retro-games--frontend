import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

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