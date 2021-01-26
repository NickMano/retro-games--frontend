import MediaPlayer from "../MediaPlayer"

class AutoPause {
    private threshold: number
    player: MediaPlayer
    
    constructor() {
        this.threshold = 0.5
        this.player = new MediaPlayer({})
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibility = this.handleVisibility.bind(this)
    }
    

    run(player: MediaPlayer) {
        this.player = player
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        })

        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handleVisibility)
    }

    private handleIntersection(entries: IntersectionObserverEntry[]){
        const entry = entries[0]
        console.log(entry)

        if (entry.intersectionRatio >= this.threshold) { 
            this.player.play()
        } else {
            this.player.pause()
        }
    }

    private handleVisibility() {
        const isVisibility = document.visibilityState === "visible"
        if (isVisibility) { this.player.play() }
        else { this.player.pause() }
    }
}

export default AutoPause