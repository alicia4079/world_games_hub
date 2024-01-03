import './memorySection.css'

export const arrayImgMemory = [
  '/animal1.svg',
  '/animal2.svg',
  '/animal3.svg',
  '/animal4.svg',
  '/animal5.svg',
  '/animal6.svg',
  '/animal7.svg',
  '/animal8.svg',
  '/animal9.svg',
  '/animal10.svg'
]

const duplicatedArray = [...arrayImgMemory, ...arrayImgMemory]
const shuffledArray = duplicatedArray.sort(() => Math.random() - 0.5)

let selectedCards = []
let clickCounter = 0
let highScore = parseInt(sessionStorage.getItem('highScore')) || 0
let flippedCount = 0
let gameCompleted = false

export const printSection = (memorySection) => {
  memorySection.innerHTML = ''

  const h2Memory = document.createElement('h2')
  h2Memory.textContent = 'Memory Game'

  const clickCounterDisplay = document.createElement('p')
  clickCounterDisplay.textContent = `Clicks: ${clickCounter}`

  const highScoreDisplay = document.createElement('p')
  highScoreDisplay.textContent = `High Score: ${highScore}`

  const divContainer = document.createElement('div')
  divContainer.className = 'divAnimals'

  shuffledArray.forEach((imgAnimal) => {
    const imgWrapper = document.createElement('div')
    imgWrapper.className = 'imgWrapper'

    const imgElement = document.createElement('img')
    imgElement.src = '/cart.png'
    imgElement.className = 'imgAnimal'
    imgElement.addEventListener('click', () =>
      handleCardClick(imgElement, imgAnimal)
    )

    imgWrapper.appendChild(imgElement)
    divContainer.appendChild(imgWrapper)
  })

  memorySection.appendChild(h2Memory)
  memorySection.appendChild(clickCounterDisplay)
  memorySection.appendChild(highScoreDisplay)
  memorySection.appendChild(divContainer)
}

function handleCardClick(imgElement, imgAnimal) {
  if (
    !gameCompleted &&
    selectedCards.length < 2 &&
    !imgElement.classList.contains('flipped')
  ) {
    imgElement.src = imgAnimal
    imgElement.classList.add('flipped')
    selectedCards.push(imgElement)
    clickCounter++

    if (selectedCards.length === 2) {
      setTimeout(() => checkMatchingCards(), 500)
    }
  }

  updateCounters()
}

function checkMatchingCards() {
  const [card1, card2] = selectedCards

  if (card1.src === card2.src) {
    card1.style.background = 'rgba(208, 2, 81, 0.867)'
    card2.style.background = 'rgba(208, 2, 81, 0.867)'
    flippedCount += 2
  } else {
    setTimeout(() => {
      card1.src = '/cart.png'
      card2.src = '/cart.png'
      card1.classList.remove('flipped')
      card2.classList.remove('flipped')
    }, 500)
  }

  selectedCards = []
  updateCounters()

  if (flippedCount === shuffledArray.length) {
    endGame()
  }
}

function updateCounters() {
  const clickCounterDisplay = document.querySelector('p:nth-child(2)')
  clickCounterDisplay.textContent = `Clicks: ${clickCounter}`
}

function updateHighScore() {
  const highScoreDisplay = document.querySelector('p:nth-child(3)')
  highScoreDisplay.textContent = `High Score: ${highScore}`
  sessionStorage.setItem('highScore', highScore.toString())
}

function endGame() {
  gameCompleted = true
  alert(`Congratulations!! Game completed! Your score is: ${clickCounter}`)
  updateHighScore()

  setTimeout(() => {
    gameCompleted = false
    if (clickCounter < highScore || highScore === 0) {
      highScore = clickCounter
    }
    clickCounter = 0
    flippedCount = 0
    shuffledArray.forEach((imgAnimal, index) => {
      const imgElement = document.querySelectorAll('.imgAnimal')[index]
      imgElement.src = '/cart.png'
      imgElement.style.background = ''
      imgElement.classList.remove('flipped')
    })

    updateHighScore()
    printSection(document.getElementById('memorySection'))
  }, 3000)
}
