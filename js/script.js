$(document).ready(function () {
    console.log("initJQuery")

    const container = document.querySelector('.fireworks')
    const fireworks = new Fireworks.default(container)
    fireworks.start()
})