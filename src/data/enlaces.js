import { rock } from '../pages/Rock/rock'
import { hangman } from '../pages/hagman/hangman'
import { memory } from '../pages/memory/memory'

export const enlaces = [
  {
    url: '/pages/Rock/rock.js',
    text: 'Rock, paper or scissors',
    page: rock,
    img: '/iconpiedrapapeltijera.svg'
  },
  {
    url: '*',
    text: 'Memory game',
    page: memory,
    img: '/iconmemory.svg'
  },
  {
    url: '*',
    text: 'Hangman game',
    page: hangman,
    img: '/iconahorcado.svg'
  }
]
