import {
  arrayIconsRock,
  createImageElements,
  printSection,
  updateComputerScore,
  updateDefeatCounter,
  updatePlayerScore,
  updateVictoryCounter
} from '../gameSectionRock/gameSectionRock'
import './selectIconRock.css'

document.addEventListener('DOMContentLoaded', () => {
  const storedPlayerScore = parseInt(localStorage.getItem('playerScore')) || 0
  const storedComputerScore =
    parseInt(localStorage.getItem('computerScore')) || 0
  const storedTotalPlayerVictories =
    parseInt(localStorage.getItem('totalPlayerVictories')) || 0
  const storedTotalPlayerDefeats =
    parseInt(localStorage.getItem('totalPlayerDefeats')) || 0
  updatePlayerScore(storedPlayerScore)
  updateComputerScore(storedComputerScore)
  updateVictoryCounter(storedTotalPlayerVictories)
  updateDefeatCounter(storedTotalPlayerDefeats)
})

export const victoryCounter = document.createElement('article')
victoryCounter.id = 'victoryCounter'

export const defeatCounter = document.createElement('article')
defeatCounter.id = 'defeatCounter'

let localScore = 0
let computerScore = 0
let totalPlayerVictories =
  parseInt(localStorage.getItem('totalPlayerVictories')) || 0
let totalPlayerDefeats =
  parseInt(localStorage.getItem('totalPlayerDefeats')) || 0

export const selectIconRock = (gameSectionRock) => {
  const h3title = document.createElement('h3')
  h3title.textContent = 'Choose your option'

  const iconContainer = document.createElement('div')
  iconContainer.className = 'iconContainer'

  const iconCenter = document.createElement('div')
  iconCenter.className = 'iconCenter'

  const resultIcons = document.createElement('div')
  resultIcons.className = 'resultIcons'

  function updateVictoryCounter() {
    victoryCounter.textContent = `Victories: ${totalPlayerVictories}`
  }

  function updateDefeatCounter() {
    defeatCounter.textContent = `Defeats: ${totalPlayerDefeats}`
  }

  const handleIconClick = (selectedIconSrc) => {
    const selectedIcon = document.createElement('img')
    selectedIcon.src = selectedIconSrc
    resultIcons.innerHTML = ''
    resultIcons.appendChild(selectedIcon)

    const randomIconSrc =
      arrayIconsRock[Math.floor(Math.random() * arrayIconsRock.length)]
    const randomIcon = document.createElement('img')
    randomIcon.src = randomIconSrc
    randomIcon.className = 'randomIcon'
    resultIcons.appendChild(randomIcon)

    const h3result = document.createElement('h3')

    if (
      (selectedIconSrc === '/piedra.svg' && randomIconSrc === '/tijeras.svg') ||
      (selectedIconSrc === '/papel.svg' && randomIconSrc === '/piedra.svg') ||
      (selectedIconSrc === '/tijeras.svg' && randomIconSrc === '/papel.svg')
    ) {
      localScore += 1
      updatePlayerScore(localScore)

      if (localScore === 10) {
        totalPlayerVictories += 1
        updateVictoryCounter()
        alert('Congratulations! You reached 10 points. You win!')
        resetScores()
      } else {
        h3result.textContent = 'YOU WIN!'
        h3result.style.color = 'hsl(107, 98%, 64%)'
      }
    } else if (selectedIconSrc === randomIconSrc) {
      h3result.textContent = 'TRY AGAIN'
      h3result.style.color = 'whitesmoke'
    } else {
      computerScore += 1
      updateComputerScore(computerScore)

      if (computerScore === 10) {
        totalPlayerDefeats += 1
        updateDefeatCounter()
        alert('Oh no! The computer reached 10 points. Better luck next time.')
        resetScores()
      } else {
        h3result.textContent = 'Oh, maybe next time'
      }

      localStorage.setItem('playerScore', localScore)
      localStorage.setItem('computerScore', computerScore)
      localStorage.setItem('totalPlayerVictories', totalPlayerVictories)
      localStorage.setItem('totalPlayerDefeats', totalPlayerDefeats)
    }

    const resultMessageContainer = document.createElement('div')
    resultMessageContainer.className = 'resultMessageContainer'
    resultMessageContainer.appendChild(h3result)
    resultIcons.insertBefore(resultMessageContainer, randomIcon)
  }

  arrayIconsRock.forEach((iconSrc) => {
    const icon = document.createElement('img')
    icon.src = iconSrc
    icon.className = 'selectIcon'
    icon.addEventListener('click', () => handleIconClick(iconSrc))
    iconCenter.appendChild(icon)
  })

  iconContainer.appendChild(h3title)
  iconContainer.appendChild(iconCenter)
  iconContainer.appendChild(resultIcons)

  return iconContainer

  function resetScores() {
    localScore = 0
    computerScore = 0
    updatePlayerScore(localScore)
    updateComputerScore(computerScore)
    updateVictoryCounter()
    updateDefeatCounter()
    localStorage.setItem('totalPlayerVictories', totalPlayerVictories)
    localStorage.setItem('totalPlayerDefeats', totalPlayerDefeats)
  }
}

export const resetScoresButton = document.createElement('button')
resetScoresButton.textContent = 'Reset Scores'
resetScoresButton.id = 'resetScoresButton'

resetScoresButton.addEventListener('click', () => {
  const resetConfirmation = confirm(
    'Are you sure you want to reset all scores and counters?'
  )

  if (resetConfirmation) {
    localStorage.setItem('playerScore', 0)
    localStorage.setItem('computerScore', 0)
    localStorage.setItem('totalPlayerVictories', 0)
    localStorage.setItem('totalPlayerDefeats', 0)

    totalPlayerVictories = 0
    totalPlayerDefeats = 0

    updatePlayerScore(0)
    updateComputerScore(0)
    updateVictoryCounter(0)
    updateDefeatCounter(0)
    victoryCounter.textContent = `Victories: 0`
    defeatCounter.textContent = `Defeats: 0`
  }
})
