import { printSection } from '../../components/memorySection/memorySection'
import './memory.css'

export const memory = () => {
  const divApp = document.querySelector('#app')

  divApp.innerHTML = ''

  const memorySection = document.createElement('section')
  memorySection.className = 'memory'
  divApp.appendChild(memorySection)

  const closeButton = document.createElement('button')
  closeButton.className = 'closeButton'
  closeButton.textContent = 'X'
  closeButton.addEventListener('click', () => {
    window.location.href = '/'
  })

  printSection(memorySection)
  memorySection.appendChild(closeButton)
}
