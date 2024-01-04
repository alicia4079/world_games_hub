import './footer.css'

export const createFooter = () => {
  const footer = document.createElement('footer')
  footer.className = 'divFooter'
  const pFooter = document.createElement('p')
  pFooter.textContent = '©️ Created by Alicia Gálvez 2024'
  footer.appendChild(pFooter)

  return footer
}
