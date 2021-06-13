const board = document.querySelector('#board')
const colors = ['#FEFE22', '#CB6586', '#C7D0CC', '#7B001C', '#2E8B57']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const colorMain = getRandomColor()
  const colorSecondary = getRandomColor()
  event.target.style.backgroundColor = colorMain
  event.target.style.boxShadow = `0 0 2px ${colorMain}, 0 0 10px ${colorSecondary}`
}

function removeColor(event) {
  event.target.style.backgroundColor = '#1d1d1d'
  event.target.style.boxShadow = `0 0 2px #000`
}

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]
