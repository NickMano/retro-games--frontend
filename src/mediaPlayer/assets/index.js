import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.getElementById('principalVideo')
const button = document.querySelector('button')
const player = new MediaPlayer( {el: video })

button.onclick = () => {
    player.tooglePlay()
}