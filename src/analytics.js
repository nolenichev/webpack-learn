function createAnalytics() {
    let counter = 0,
        isDestroyed = false

    const listiner = () => counter++

    document.addEventListener('click', listiner)

    return {
        destroy() {
            document.removeEventListener('click', listiner),
            isDestroyed = true
        },

        getClicks() {
            if (isDestroyed) {
                return 'Analytics was destroyed'
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()