import { State } from '../state'

export class HomeComponent {
  constructor(container) {
    this.container = container
  }

  render() {
    this.container.innerHTML = this.markup()
    this.addEventListeners()
  }

  markup() {
  return `
    <h1>FlashyCerts</h1>
    <button id='go-to-login-btn'>Login</button>
    <button id='go-to-registration-btn'>Register</button>
    `
  }

  addEventListeners(){
    document.querySelector('#go-to-login-btn').addEventListener('click', () => State.router.changeRoute('login'))
    document.querySelector('#go-to-registration-btn').addEventListener('click', () => State.router.changeRoute('registration'))
  }
}