import { enlaces } from '../../data/enlaces'
import './header.css'

const loadPage = (pageFunction) => {
  const divApp = document.querySelector('#app')
  divApp.innerHTML = ''

  const headerHTML = document.querySelector('header')
  if (headerHTML) {
    headerHTML.remove()
  }

  pageFunction()
}

export const header = () => {
  const headerHTML = document.createElement('header')
  const h1header = document.createElement('h1')
  h1header.textContent = 'World Games Hub'
  const logo = document.createElement('img')
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')

  logo.src = '/logoprincipal.svg'

  for (const enlace of enlaces) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    const linkContainer = document.createElement('div')
    linkContainer.classList = 'linkContainer'
    const imgGame = document.createElement('img')
    const textNode = document.createTextNode(enlace.text)

    imgGame.className = 'enlaceImg'
    a.href = enlace.url

    a.addEventListener('click', (event) => {
      event.preventDefault()
      loadPage(enlace.page)
    })

    imgGame.src = enlace.img

    linkContainer.appendChild(textNode)
    linkContainer.appendChild(imgGame)
    a.appendChild(linkContainer)

    li.appendChild(a)
    ul.appendChild(li)
  }

  headerHTML.appendChild(h1header)
  headerHTML.appendChild(logo)
  headerHTML.appendChild(nav)
  nav.appendChild(ul)
  document.body.appendChild(headerHTML)
}
