import {
  arrayIconsRock,
  printSection
} from '../../components/gameSectionRock/gameSectionRock'
import { selectIconRock } from '../../components/selectIconRock/selectIconRock'
import './rock.css'

export const rock = () => {
  const divApp = document.querySelector('#app')
  divApp.innerHTML = ''

  const gameSectionRock = document.createElement('section')
  gameSectionRock.className = 'rock-paper-scissors'
  divApp.appendChild(gameSectionRock)

  const closeButton = document.createElement('button')
  closeButton.className = 'closeButton'
  closeButton.textContent = 'X'
  closeButton.addEventListener('click', () => {
    window.location.href = '/'
  })

  printSection(gameSectionRock)
  const iconContainer = selectIconRock(arrayIconsRock)
  gameSectionRock.appendChild(iconContainer)
  gameSectionRock.appendChild(closeButton)
}
