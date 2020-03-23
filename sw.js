const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request
    
    if (request.method != 'GET') {
        return
    }

    event.respondWith(cachedResponse(request))
    event.waitUntil(updateCache(request))
})

const precache = async () => {
    const cache = await caches.open(VERSION)
    return cache.addAll([
        './src/mediaPlayer/',
        './src/mediaPlayer/index.html',
        './src/mediaPlayer//assets/index.ts',
        './src/mediaPlayer//assets/MediaPlayer.ts',
        './src/mediaPlayer//assets/plugins/AutoPause.ts',
        './src/mediaPlayer//assets/plugins/AutoPlay.ts',
        './src/mediaPlayer//assets/index.css',
        './src/mediaPlayer//assets/BigBunny.mp4'
    ])
}

const cachedResponse = async request => {
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}

const updateCache = async request => {
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request, response)
}