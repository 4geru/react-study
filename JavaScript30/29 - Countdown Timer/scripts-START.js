let countdown
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('button')

function timer(seconds) {
    // 他のタイマーを消す
    clearInterval(countdown)

    const now = Date.now()
    const then = now + seconds * 1000
    console.log({now, seconds})

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/ 1000)
        console.log({secondsLeft})

        // タイマーを止める
        if (secondsLeft <= 0) {
            clearInterval(countdown)
            return
        }
        // 表示する
        displayTimeLeft(secondsLeft)
        displayEndTime(then)
    }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60
    console.log({minutes, remainderSeconds})
    const display = `${minutes}:${remainderSeconds < 10 ? '0': ''}${remainderSeconds}`
    document.title = display
    timerDisplay.textContent = display
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp)
    const hour = end.getHours()
    const adjustHour = hour > 12 ? hour - 12 : hour
    const minutes = end.getMinutes()
    endTime.textContent = `BE Back At ${adjustHour}:${minutes < 10 ? '0' : ''}${minutes}`
}

function startTimer() {
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const mins = this.minutes.value
    console.log({mins})
    timer(mins * 60)
    this.reset()
})