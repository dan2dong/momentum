const dateSection = document.querySelector('#date')
const clockSection = document.querySelector('#clock')

// date section
function date() {
  const today = new Date()

  const monthText = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ]
  const dayText = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const year = today.getFullYear()
  const month = monthText[today.getMonth()].padStart(2, '0')
  const date = JSON.stringify(today.getDate()).padStart(2, '0')
  const day = dayText[today.getDay()]

  dateSection.innerText = `${year} ${month} ${date} ${day}`
}

// clock section
function clock() {
  const today = new Date()

  const timeNum = [
    12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11,
  ]

  const hours = JSON.stringify(timeNum[today.getHours()]).padStart(2, '0')
  const minutes = JSON.stringify(today.getMinutes()).padStart(2, '0')
  //const seconds = JSON.stringify(today.getSeconds()).padStart(2, "0");

  if (today.getHours() < 12) {
    clockSection.innerText = `${hours} : ${minutes} AM`
  } else if (today.getHours() >= 12) {
    clockSection.innerText = `${hours} : ${minutes} PM`
  }
}

date()
clock()
setInterval(clock, 1000)
