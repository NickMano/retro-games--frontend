class MediaPlayer {
    media: any
    plugins: any
    
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this._initPlugins()
    }
    play() { return this.media.play() }
    pause() { return this.media.pause() }
    tooglePlay() {
        (this.media.paused)
            ? this.play()
            : this.pause()
    }
    mute() { this.media.muted = true }
    unmute() { this.media.muted = false }
    toogleMute() {
        (this.media.muted)
            ? this.unmute()
            : this.mute()
    }

    _initPlugins() {
        this.plugins.forEach( plugin => {
            plugin.run(this)
        })           
    }
}

export default MediaPlayer