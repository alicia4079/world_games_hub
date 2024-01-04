import './hangmanSection.css'

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'ñ',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

const getRandomWord = () => {
  const words = [
    'computer',
    'programming',
    'javascript',
    'developer',
    'language',
    'openai',
    'artificial',
    'intelligence',
    'keyboard',
    'function',
    'variable',
    'algorithm',
    'software',
    'debugging'
  ]
  const randomIndex = Math.floor(Math.random() * words.length)
  return words[randomIndex]
}

const maxAttempts = 6
let attempts = 0
let hangmanImage
let secretWord = getRandomWord()
let revealedWord = Array(secretWord.length).fill('_')

export const printSection = (hangmanSection) => {
  const h2Hangman = document.createElement('h2')
  h2Hangman.textContent = 'Hangman game'

  const divContainer = document.createElement('div')
  divContainer.className = 'hangman-container'

  const divImage = document.createElement('article')
  divImage.className = 'divImg'

  const divLetters = document.createElement('article')
  divLetters.className = 'divLetters'

  for (const letter of alphabet) {
    const pLetters = document.createElement('p')
    pLetters.textContent = letter

    pLetters.addEventListener('click', handleLetterClick)

    divLetters.appendChild(pLetters)
  }

  divContainer.appendChild(divImage)
  divContainer.appendChild(divLetters)

  hangmanSection.appendChild(h2Hangman)
  hangmanSection.appendChild(divContainer)

  const articleResult = document.createElement('article')
  const h3Result = document.createElement('h3')
  h3Result.textContent = revealedWord.join(' ')
  articleResult.appendChild(h3Result)
  hangmanSection.appendChild(articleResult)

  updateHangmanImage()

  function updateHangmanImage() {
    hangmanImage = document.createElement('img')
    hangmanImage.className = 'hangman-image'
    hangmanImage.src = `ahorcado_0${attempts}.png`

    divImage.innerHTML = ''
    divImage.appendChild(hangmanImage)
  }

  function handleIncorrectAttempt() {
    attempts++
    updateHangmanImage()

    if (attempts === maxAttempts) {
      alert(`You lost! The word was ${secretWord}`)
      resetGame()
    }
  }

  function handleLetterClick(event) {
    const element = event.target
    const letter = element.textContent

    if (element.classList.contains('selected')) {
      return
    }

    if (secretWord.includes(letter)) {
      updateRevealedWord(letter)
    } else {
      handleIncorrectAttempt()
    }

    element.classList.add('selected')
  }

  function updateRevealedWord(letter) {
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === letter) {
        revealedWord[i] = letter
      }
    }

    h3Result.textContent = revealedWord.join(' ')

    if (!revealedWord.includes('_')) {
      alert('Congratulations! You guessed the word.')
      resetGame()
    }
  }

  function resetGame() {
    secretWord = getRandomWord()
    revealedWord = Array(secretWord.length).fill('_')
    attempts = 0
    updateHangmanImage()
    h3Result.textContent = revealedWord.join(' ')
  }
}
