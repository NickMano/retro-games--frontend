import MediaPlayer from "../MediaPlayer"

class AutoPause {
    player: MediaPlayer
    threshold: number
    
    constructor() {
        this.threshold = 0.5
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

    handleIntersection(entries){
        const entry = entries[0]
        console.log(entry)

        if (entry.intersectionRatio >= this.threshold) { 
            this.player.play()
        } else {
            this.player.pause()
        }
    }

    handleVisibility() {
        const isVisibility: boolean = document.visibilityState === "visible"
        if (isVisibility) { this.player.play() }
        else { this.player.pause() }
    }
}

export default AutoPause