import './gameSectionRock.css'
import {
  resetScoresButton,
  selectIconRock
} from '../selectIconRock/selectIconRock'
import { victoryCounter, defeatCounter } from '../selectIconRock/selectIconRock'

export const arrayIconsRock = ['/papel.svg', '/piedra.svg', '/tijeras.svg']

export const createImageElements = () => {
  const imageElements = []

  for (const imgSrc of arrayIconsRock) {
    const imgIcons = document.createElement('img')
    imgIcons.src = imgSrc
    imgIcons.className = 'imgSrc'
    imageElements.push(imgIcons)
  }

  return imageElements
}

export const printSection = (gameSectionRock) => {
  gameSectionRock.innerHTML = ''

  const h2GameRock = document.createElement('h2')
  h2GameRock.textContent = 'Rock, Paper or Scissors'
  const divCounter = document.createElement('div')
  divCounter.classList = 'divCounter'
  const divPlayer = document.createElement('div')
  divPlayer.classList = 'divPlayer'
  const h3player = document.createElement('h3')
  h3player.textContent = 'Player'
  const scorePlayer = document.createElement('p')
  scorePlayer.textContent = 0
  const divComputer = document.createElement('div')
  divComputer.classList = 'divComputer'
  const h3Computer = document.createElement('h3')
  h3Computer.textContent = 'Computer'
  const scoreComputer = document.createElement('p')
  scoreComputer.textContent = 0

  const storedPlayerScore = localStorage.getItem('playerScore') || 0
  const storedComputerScore = localStorage.getItem('computerScore') || 0

  gameSectionRock.appendChild(h2GameRock)
  gameSectionRock.appendChild(divCounter)
  divCounter.appendChild(divPlayer)
  divPlayer.appendChild(h3player)
  divPlayer.appendChild(scorePlayer)
  divCounter.appendChild(divComputer)
  divComputer.appendChild(h3Computer)
  divComputer.appendChild(scoreComputer)

  gameSectionRock.appendChild(victoryCounter)
  gameSectionRock.appendChild(defeatCounter)
  gameSectionRock.appendChild(resetScoresButton)

  scorePlayer.textContent = storedPlayerScore
  scoreComputer.textContent = storedComputerScore
}

export const updatePlayerScore = (score) => {
  const scorePlayer = document.querySelector('.divPlayer p')
  if (scorePlayer) {
    scorePlayer.textContent = score
    localStorage.setItem('playerScore', score)
  }
}

export const updateComputerScore = (score) => {
  const scoreComputer = document.querySelector('.divComputer p')
  if (scoreComputer) {
    scoreComputer.textContent = score
    localStorage.setItem('computerScore', score)
  }
}

export const updateVictoryCounter = (score) => {
  const victoryCounter = document.querySelector(
    '.divCounter article:nth-child(1)'
  )
  if (victoryCounter) {
    victoryCounter.textContent = score
    localStorage.setItem('victoryCounter', score)
  }
}

export const updateDefeatCounter = (score) => {
  const defeatCounter = document.querySelector(
    '.divCounter article:nth-child(2)'
  )
  if (defeatCounter) {
    defeatCounter.textContent = score
    localStorage.setItem('defeatCounter', score)
  }
}
