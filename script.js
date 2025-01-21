const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = 1
    }
    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = circles.length
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        // console.log(idx)
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }

    })

    const actives = document.querySelectorAll('.active')
    console.log(actives)

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = false
    } else if (currentActive === circles.length) {
        next.disabled = flase
    } else {
        prev.disabled = false
        next.disabled = false
    }
}