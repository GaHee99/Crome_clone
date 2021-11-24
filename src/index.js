const clockTitle = document.querySelector('.js-clock')

function getClock() {
  const today = new Date()
  const dday = new Date(2021, 12, 25)
  const gap = dday.getTime() - today.getTime()
  const day = Math.floor(gap / (1000 * 60 * 60 * 24))
  const hour = String(
    Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  ).padStart(2, '0')
  const min = String(
    Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60)),
  ).padStart(2, '0')
  const sec = String(Math.floor((gap % (1000 * 60)) / 1000)).padStart(2, '0')

  clockTitle.innerText = `${day}d ${hour}h ${min}m ${sec}s`
}
getClock()
setInterval(getClock, 1000)
