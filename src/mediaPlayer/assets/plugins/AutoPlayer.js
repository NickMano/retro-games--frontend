class AutoPlayer {
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
    }
    play() { return this.media.play() }
    pause() { return this.media.pause() }
    tooglePlay() {
        (this.media.paused)
            ? this.play()
            : this.pause()
    }
}

export default AutoPlayer