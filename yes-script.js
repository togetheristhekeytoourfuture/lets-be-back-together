let musicPlaying = false

window.addEventListener('load', () => {
    launchConfetti()

    // Autoplay music — works because user already clicked "Yes" to reach this page,
    // which satisfies the browser's user-interaction requirement for autoplay.
    const music = document.getElementById('bg-music')
    music.volume = 1.0
    music.play().catch(() => {
        // Playback still failed (e.g. browser is extra strict) — silently ignore
        // so it doesn't break the rest of the page.
        musicPlaying = false
    })

    musicPlaying = true
})

function launchConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ff85a2', '#ffb3c1', '#ff0000', '#ff6347', '#fff', '#ffdf00']
    const duration = 6000
    const end = Date.now() + duration

    // Initial big burst
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0.3 },
        colors
    })

    // Continuous side cannons
    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval)
            return
        }

        confetti({
            particleCount: 40,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors
        })

        confetti({
            particleCount: 40,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors
        })
    }, 300)
}
