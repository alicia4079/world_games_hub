import { createFooter } from '../../components/footer/footer'
import { printSection } from '../../components/hangmanSection/hangmanSection'
import './hangman.css'

export const hangman = () => {
  const divApp = document.querySelector('#app')

  divApp.innerHTML = ''

  const hangmanSection = document.createElement('section')
  hangmanSection.className = 'hangman'
  divApp.appendChild(hangmanSection)

  const closeButton = document.createElement('button')
  closeButton.className = 'closeButton'
  closeButton.textContent = 'X'
  closeButton.addEventListener('click', () => {
    window.location.href = '/'
  })

  printSection(hangmanSection)
  hangmanSection.appendChild(closeButton)
  const footer = createFooter()
  hangmanSection.appendChild(footer)
}
